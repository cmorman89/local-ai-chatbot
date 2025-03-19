import PropTypes from "prop-types";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import { useEffect, useState } from "react";
import useStreamingChat from "../hooks/useStreamingChat";

const ChatBox = ({ children }) => {
  const url = "http://127.0.0.1:1234";
  const { messages, sendMessage, loading } = useStreamingChat(url);
  const [history, setHistory] = useState([]);
  const [formData, setFormData] = useState({
    userPrompt: "",
    systemPrompt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.userPrompt.trim() === "") return;
    console.log("Submitting form data:", formData);
    sendMessage(formData.userPrompt);
    setHistory((prev) => [...prev, formData.userPrompt]);
    setFormData({ ...formData, userPrompt: "" });
  };

  useEffect(() => {
    console.log("Messages updated:", messages);
  }, []);
  return (
    <div
      className="
        flex flex-col 
        w-full p-8 ml-24 mr-24
        gap-4
        "
    >
      {history
        ? history.map((message, i) => (
            <ChatBubble key={i} isUser={true}>
              <span className="animate-fade-up">{message}</span>
            </ChatBubble>
          ))
        : null}
      {messages.length != 0 ? (
        <ChatBubble title="Response">
          <div>
            {messages.map((message, i) => (
              <span key={i} className="animate-fade-up-fast">
                {message.content}
              </span>
            ))}
          </div>
        </ChatBubble>
      ) : null}

      <ChatInput
        name="userPrompt"
        value={formData.userPrompt}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

ChatBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChatBox;
