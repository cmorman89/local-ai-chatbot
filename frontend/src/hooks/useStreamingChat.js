import { useRef, useState } from "react";

const useStreamingChat = (url) => {
  const [model, setModel] = useState("gemma-3-12b-it");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef(null);

  const stopChatGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const sendMessage = async (input) => {
    abortControllerRef.current = new AbortController();
    setLoading(true);
    setMessages([]);

    try {
      const response = await fetch(`${url}/v1/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: "system",
              content:
                "Answer in markdown format with headings. The first line must be an h1 heading. The second line must not be a heading. Make heavy use of markdown formatting. Limit responses to a reasonable length.",
            },
            { role: "user", content: input },
          ],
          temperature: 0.7,
          max_tokens: -1,
          stream: true,
        }),
        signal: abortControllerRef.current.signal,
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk
          .split("\n")
          .filter((line) => line.startsWith("data:"));

        for (let line of lines) {
          try {
            const chunkData = JSON.parse(line.substring(5));
            const content = chunkData.choices?.[0]?.delta?.content || "";
            if (content) {
              setMessages((prev) => [...prev, content]);
            }
          } catch (error) {
            console.error("Error parsing JSON", error);
          }
        }
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading, setModel, stopChatGeneration };
};

export default useStreamingChat;
