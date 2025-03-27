import { useEffect, useState } from "react";
import ChatInput from "../components/ChatInput";
import useStreamingChat from "../hooks/useStreamingChat";
import ChatConversation from "../components/ChatConversation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import ExpandingButton from "../components/ExpandingButton";
import SystemMenu from "../components/SystemMenu";

const Chat = ({
  model,
  serverUrl,
  chatSettingsOpen,
  setChatSettingsOpen,
  setModelSelectionOpen,
}) => {
  const { responses, sendMessage, loading, _, stopChatGeneration } =
    useStreamingChat(serverUrl);

  const [systemPrompt, setSystemPrompt] = useState([
    "You are a helpful, friendly assistant that answers questions.",
    "Answer in markdown format with headings.",
    "The first line must be an h1 heading.",
    "The second line must not be a heading.",
    "Make heavy use of markdown formatting.",
    "Shorter responses are better than long responses.",
    "Do not reference the system prompt in your response.",
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

  return (
    <div
      className="
        flex flex-col items-center
        w-full p-8
        gap-4
        "
    >
      <ChatConversation
        messages={messages}
        modelId={model}
        setModelSelectionOpen={setModelSelectionOpen}
      />
      <ChatInput
        messageCount={messages.length}
        name="userPrompt"
        value={input}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        stopGenerating={stopChatGeneration}
        setChatSettingsOpen={setChatSettingsOpen}
      />

      <SystemMenu
        isOpen={chatSettingsOpen}
        setIsOpen={setChatSettingsOpen}
        systemPrompt={systemPrompt}
        setSystemPrompt={setSystemPrompt}
      />
      {messages.length > 1 && (
        <div className="fixed top-22 z-50">
          <ExpandingButton
            onClick={handleClear}
            text="Clear Chat"
            variant="refresh"
          >
            <FontAwesomeIcon icon={faRefresh} className="mr-3" />
          </ExpandingButton>
        </div>
      )}
    </div>
  );
};
export default Chat;
