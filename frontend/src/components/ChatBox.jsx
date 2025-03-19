import PropTypes from "prop-types";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import React, { useEffect, useState } from "react";
import useStreamingChat from "../hooks/useStreamingChat";

const ChatBox = () => {
  const url = "http://127.0.0.1:1234";
  const { messages, sendMessage, _ } = useStreamingChat(url);
  const [displayedMessages, setDisplayedMessages] = useState([]);
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

  // Check for markdown in the response
  useEffect(() => {
    setDisplayedMessages([]);
    
    // Split the messages into lines
    const toLines = (chunks) => {
      return chunks.join("").split("\n");
    };

    // Parse the line-level markdown tags
    const parseMarkdown = (text) => {
      const regex = {
        h1: /^#{1} (.*)/,
        h2: /^#{2} (.*)/,
        h3: /^#{3} (.*)/,
        h4: /^#{4} (.*)/,
        h5: /^#{5} (.*)/,
        h6: /^#{6} (.*)/,
        li: /^ *[*+-] {2}(.*)|^ *[0-9]+\. (.*)/,
        quote: /^> (.*)/,
        code: /^```(.*)/,
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

  const wrapMatches = (text, regex, Wrapper, className) => {
    if (regex.test(text)) {
      return text.split(regex).map((part, index) =>
        index % 2 === 1 ? (
          <Wrapper key={index} className={className}>
            {processInlineMarkdown(part)}
          </Wrapper>
        ) : (
          processInlineMarkdown(part)
        )
      );
    }
    return text;
  };

  const processInlineMarkdown = (text) => {
    // Match inline code `code`
    text = wrapMatches(
      text,
      /`(.*?)`/g,
      "code",
      "bg-gray-200 p-1 rounded font-mono"
    );
    // Match ***bold italic***
    text = wrapMatches(text, /\*\*\*(.*?)\*\*\*/g, "span", "font-bold italic");
    // Match **bold**
    text = wrapMatches(text, /\*\*(.*?)\*\*/g, "span", "font-bold");
    // Match *italic*
    text = wrapMatches(text, /[*_](.*?)[*_]/g, "span", "italic");
    // Match *code*
    text = wrapMatches(text, /~~(.*?)~~/g, "span", "line-through");
    return text;
  };

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
              <span className="animate-fade-up ">{message}</span>
            </ChatBubble>
          ))
        : null}
      {displayedMessages.length > 1
        ? displayedMessages.reduce((acc, message, i) => {
            if (message.tag === "h1" || message.tag === "h2") {
              // Start a new ChatBubble
              acc.push(
                <ChatBubble key={i} title={message.content}>
                  {/* Future messages will be children */}
                </ChatBubble>
              );
            } else {
              // Process markdown in message content
              const formattedContent = processInlineMarkdown(message.content);

              // Add to the latest ChatBubble
              const lastBubble = acc[acc.length - 1];
              if (lastBubble) {
                acc[acc.length - 1] = React.cloneElement(lastBubble, {}, [
                  ...(lastBubble.props.children || []),
                  message.tag === "br" ? (
                    <div key={i} className="mb-2" />
                  ) : (
                    React.createElement(
                      message.tag,
                      { key: i, className: "markdown animate animate-fade-up-fast" },
                      formattedContent
                    )
                  ),
                ]);
              }
            }
            return acc;
          }, [])
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
