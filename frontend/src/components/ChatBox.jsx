import PropTypes from "prop-types";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import React, { useEffect, useState } from "react";
import useStreamingChat from "../hooks/useStreamingChat";
import useMarkdownRenderer from "../hooks/useMarkdownRenderer";
import ReactMarkdown from "react-markdown";

const ChatBox = () => {
  const url = "http://127.0.0.1:1234";
  const { messages, sendMessage, _ } = useStreamingChat(url);
  const { chatBubbles, renderMarkdown } = useMarkdownRenderer();
  const [history, setHistory] = useState([]);
  const [formData, setFormData] = useState({
    userPrompt: "",
    systemPrompt: "",
  });

  // Update the form data on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (formData.userPrompt.trim() === "") return;
    console.log("Submitting form data:", formData);
    sendMessage(formData.userPrompt);
    setHistory((prev) => [...prev, formData.userPrompt]);
    setFormData({ ...formData, userPrompt: "" });
  };

  // Render the markdown when messages change
  useEffect(() => {
    if (messages.length > 0) {
      renderMarkdown(messages.join("").split("\n"));
    }
  }, [messages]);

  return (
    <div
      className="
        flex flex-col items-center
        w-full p-8 mb-50
        gap-4
        "
    >
      {history
        ? history.map((message, i) => (
            <ChatBubble key={i} isUser={true}>
              <span className="animate-fade-up ">{message}</span>
            </ChatBubble>
          ))
        : null}
      {chatBubbles
        ? chatBubbles.map((bubble, i) => (
            <ChatBubble key={i} title={bubble.title}>
              <ReactMarkdown>{bubble.content.join("\n")}</ReactMarkdown>
            </ChatBubble>
          ))
        : null}

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
