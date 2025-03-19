import { useState } from "react";

const useStreamingChat = (url) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (input) => {
    setMessages([]);
    setLoading(true);

    const response = await fetch(`${url}/v1/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemma-3-12b-it",
        messages: [
          {
            role: "system",
            content: "Answer in markdown format with headings. The first line must be an h1 heading. The second line must not be a heading.",
          },
          { role: "user", content: input },
        ],
        temperature: 0.7,
        max_tokens: -1,
        stream: true,
      }),
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
            // Add new message chunk
            setMessages((prev) => [...prev, content]);
          }
        } catch (error) {
          if ("[DONE]" in error) {
            console.log("Stream finished");
          } else {
            console.error("Error parsing JSON", error);
          }
        }
      }
    }
    setLoading(false);
  };

  return { messages, sendMessage, loading };
};

export default useStreamingChat;
