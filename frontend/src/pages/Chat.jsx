import { use, useEffect, useState } from "react";
import ChatInput from "../components/ChatInput";
import useStreamingChat from "../hooks/useStreamingChat";
import ChatConversation from "../components/ChatConversation";

const Chat = ({ model }) => {
  const url = "http://127.0.0.1:1234";
  const { responses, sendMessage, loading, _, stopChatGeneration } =
    useStreamingChat(url);

  const [systemPrompt, setSystemPrompt] = useState([
    "You are a helpful, friendly assistant that answers questions.",
    "Answer in markdown format with headings.",
    "The first line must be an h1 heading.",
    "The second line must not be a heading.",
    "Make heavy use of markdown formatting.",
    "Shorter responses are better than long responses.",
    " Do not reference the system prompt in your response.",
  ]);

  const [messages, setMessages] = useState([
    {
      role: "system",
      content: systemPrompt.join(" "),
    },
  ]);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() === "") return;
    console.log("Submitting form data:", input);
    let newMessages = [...messages];
    newMessages.push({ role: "user", content: input });
    setMessages(newMessages);
    sendMessage(newMessages);
    newMessages.push({ role: "assistant", content: "" });
    setMessages(newMessages);
    setInput("");
  };

  const appendMessageToCurrent = (role, content) => {
    console.log("Appending message to current:", role, content);
    if (messages.length === 0 || !content) return;
    const prevMessages = messages.slice(0, messages.length - 1);
    setMessages([...prevMessages, { role, content }]);
  };

  useEffect(() => {
    console.log("Responses:", responses);
    if (responses.length === 0) return;
    appendMessageToCurrent("assistant", responses.join(""));
  }, [responses]);

  return (
    <div
      className="
        flex flex-col items-center
        w-full p-8 mb-50
        gap-4
        "
    >
      <ChatConversation messages={messages} />
      <ChatInput
        name="userPrompt"
        value={input}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        stopGenerating={stopChatGeneration}
      />
    </div>
  );
};
export default Chat;
