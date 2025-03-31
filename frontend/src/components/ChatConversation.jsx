import ChatBubble from "./ChatBubble";
import ChatIntro from "./ChatIntro";

const ChatConversation = ({ messages, modelId, setModelSelectionOpen, modelLoading }) => {
  const handleAssistantContent = (content) => {
    // Split the content into lines
    let lines = content.split("\n");
    // Remove any empty lines
    lines = lines.filter((line) => line.trim() !== "");
    // Initialize an empty array to hold the chat bubbles
    let chatBubbles = [];

    // Iterate through the lines and create chat bubbles
    for (let line of lines) {
      if (line.startsWith("# ") || line.startsWith("## ")) {
        let title = line.match(/^#{1,2} (.*)/);
        if (!title) continue;
        chatBubbles.push({ title: title[1], content: [] });
      } else {
        if (chatBubbles.length > 0) {
          chatBubbles[chatBubbles.length - 1].content.push(line);
        } else {
          chatBubbles.push({ title: null, content: [line] });
        }
      }
    }
    return chatBubbles;
  };

  return (
    <div className="flex flex-col items-center w-full p-8 mb-50 gap-4">
      {/* {messages.length === 1 && (
        <ChatIntro
          modelId={modelId}
          modelLoading={modelLoading}
          setModelSelectionOpen={setModelSelectionOpen}
        />
      )} */}
      {messages.map((message, index) => {
        // Skip system messages
        if (message.role === "system") {
          return;
        }
        // Style user messages differently
        if (message.role === "user") {
          return (
            <ChatBubble key={index} isUser={true}>
              {message.content}
            </ChatBubble>
          );
        } else {
          const chatBubbles = handleAssistantContent(message.content);
          return chatBubbles.map((bubble, i) => (
            <ChatBubble key={i} title={bubble.title}>
              {bubble.content.join("\n")}
            </ChatBubble>
          ));
        }
      })}
    </div>
  );
};
export default ChatConversation;
