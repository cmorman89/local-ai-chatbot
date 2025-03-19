import { useState } from "react";
import useStreamingChat from "../hooks/useStreamingChat";
import ChatBubble from "./ChatBubble";

const ChatComponent = ({ url }) => {
  const [input, setInput] = useState("");
  const { messages, sendMessage, loading } = useStreamingChat(url);
  const [history, setHistory] = useState([]);

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(input);
      setHistory((prev) => [...prev, input]);
      setInput("");
    }
  }
  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={() => sendMessage(input)} disabled={loading}>
        {loading ? "Loading..." : "Send"}
      </button>
      <ChatBubble title="Response">
        <div>
          {messages.map((message, i) => (
            <span
              key={i}
              className="animate-fade-up"
            >
              {message.content}
            </span>
          ))}
        </div>
      </ChatBubble>
    </div>
  );
};

export default ChatComponent;
