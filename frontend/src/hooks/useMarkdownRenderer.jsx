import { useState } from "react";

const useMarkdownRenderer = () => {
  const [chatBubbles, setChatBubbles] = useState([]);

  const renderMarkdown = (markdown) => {
    let newBubbles = [];

    for (let line of markdown) {
      if (line.startsWith("# ") || line.startsWith("## ")) {
        let title = line.match(/^#{1,2} (.*)/);
        if (!title) continue;
        newBubbles.push({ title: title[1], content: [] });
      } else {
        if (newBubbles.length > 0) {
          newBubbles[newBubbles.length - 1].content.push(line);
        }
      }
    }

    setChatBubbles(newBubbles);
    return newBubbles;
  };

  return { chatBubbles, renderMarkdown };
};

export default useMarkdownRenderer;
