import { useEffect, useState } from "react";
import ChatInput from "../components/ChatInput";
import useStreamingChat from "../hooks/useStreamingChat";
import ChatConversation from "../components/ChatConversation";
import SystemMenu from "../components/SystemMenu";

const Chat = ({
  model,
  modelLoading,
  serverUrl,
  setActiveMenu,
  systemPrompt,
  darkMode,
}) => {
  const { responses, sendMessage, loading, _, stopChatGeneration } =
    useStreamingChat(serverUrl);
  const [position, setPosition] = useState("translate-y-0");

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
    let newMessages = [...messages];
    newMessages.push({ role: "user", content: input });
    setMessages(newMessages);
    sendMessage(newMessages, model);
    newMessages.push({ role: "assistant", content: "" });
    setMessages(newMessages);
    setInput("");
  };

  const handleClear = () => {
    setMessages([
      {
        role: "system",
        content: systemPrompt.join(" "),
      },
    ]);
  };

  const appendMessageToCurrent = (role, content) => {
    if (messages.length === 0 || !content) return;
    const prevMessages = messages.slice(0, messages.length - 1);
    setMessages([...prevMessages, { role, content }]);
  };

  useEffect(() => {
    if (responses.length === 0) return;
    appendMessageToCurrent("assistant", responses.join(""));
  }, [responses]);

  useEffect(() => {
    if (messages.length > 1) {
      setPosition("bottom-10"); // Move down smoothly
    } else {
      setPosition("bottom-[calc(50vh-200px)]"); // Move up smoothly
    }
  }, [messages.length]);
  return (
    <div
      className="
        flex flex-col items-center
        w-full pb-8 px-0 md:px-2 lg:px-4 xl:px-8
        gap-4
        animate
        "
    >
      <ChatConversation
        messages={messages}
        modelId={model}
        modelLoading={modelLoading}
        setActiveMenu={setActiveMenu}
        darkMode={darkMode}
      />
      <div
        className={`w-5/6 transition-all duration-1000 fixed z-20 ${position}`}
      >
        <ChatInput
          messageCount={messages.length}
          modelId={model}
          name={name}
          value={input}
          onChange={handleChange}
          onClear={handleClear}
          onSubmit={handleSubmit}
          loading={loading}
          stopGenerating={stopChatGeneration}
          setActiveMenu={setActiveMenu}
          modelLoading={modelLoading}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};
export default Chat;
