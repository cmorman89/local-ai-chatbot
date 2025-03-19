import PropTypes from "prop-types";
import ChatInput from "./ChatInput";
import { useState } from "react";


const ChatBox = ({ children }) => {
  const [formData, setFormData] = useState({
    userPrompt: "",
    systemPrompt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div
      className="
        flex flex-col 
        w-full p-8 ml-24 mr-24
        gap-4
        "
    >
      {children}
      <ChatInput
        name="userPrompt"
        value={formData.userPrompt}  
        onChange={handleChange}
      />
    </div>
  );
};

ChatBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChatBox;
