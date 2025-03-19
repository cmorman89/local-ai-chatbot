import PropTypes from "prop-types";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import React, { useEffect, useState } from "react";
import useStreamingChat from "../hooks/useStreamingChat";

const ChatBox = () => {
  const url = "http://127.0.0.1:1234";
  const { messages, sendMessage, _ } = useStreamingChat(url);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [title, setTitle] = useState("Response");
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

  
  // Check for markdown in the response
  useEffect(() => {
    setDisplayedMessages([]);
    // Get only the new chunk
    const toLines = (chunks) => {
      return chunks.join("").split("\n");
    };

    const parseMarkdown = (text) => {
      const regex = {
        h1: /^#{1} (.*)/,
        h2: /^#{2} (.*)/,
        h3: /^#{3} (.*)/,
        h4: /^#{4} (.*)/,
        h5: /^#{5} (.*)/,
        h6: /^#{6} (.*)/,
        li: /^ *[*+-] {2}(.*)/,
        ol: /^ *[0-9]+\. (.*)/,
        p: /^(.*)/,
      };

      for (let line of text) {
        if (line === "") {
          const taggedMessage = { tag: "br", content: "" };
          setDisplayedMessages((prev) => [...prev, taggedMessage]);
          continue;
        }
        for (const [tag, pattern] of Object.entries(regex)) {
          const match = line.match(pattern);
          if (match) {
            const content = match[1];
            const taggedMessage = { tag, content };
            setDisplayedMessages((prev) => [...prev, taggedMessage]);
            break;
          }
        }
      }
    };

    parseMarkdown(toLines(messages));
  }, [messages]);

  return (
    <div
      className="
        flex flex-col 
        w-full p-8 ml-24 mr-24 mb-50
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
      {displayedMessages.length > 1 ? (
        <ChatBubble title={title}>
          <div>
            {displayedMessages.map((message, i) =>
              (message.tag === "h1" || message.tag === "h2") &&
              title === "Response" ? (
                (console.log(message.tag), setTitle(message.content))
              ) : message.tag === "br" ? (
                  <div key={i} className="mb-2"></div>
              ) : (
                message.content !== title &&
                    React.createElement(message.tag, { key: i, className: 'markdown' }, `${message.tag}: ${message.content}`)
              )
            )}
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
