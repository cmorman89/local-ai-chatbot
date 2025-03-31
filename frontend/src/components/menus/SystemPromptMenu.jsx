import {
    faCircleCheck,
    faCircleXmark,
    faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ExpandingButton from "../ExpandingButton";
import MessageBubble from "../MessageBubble";

const SystemPromptMenu = ({ systemPrompt, setSystemPrompt }) => {
  const [focusIndex, setFocusIndex] = useState(null);
  
  const handleRemovePrompt = (index) => {
      setSystemPrompt((prev) => prev.filter((_, i) => i !== index));
    };

    const handleAddPrompt = () => {
        setSystemPrompt((prev) => [...prev, ""]);
    };
    
    const handlePromptChange = (e, index) => {
        const newPrompts = [...systemPrompt];
        newPrompts[index] = e.target.value;
        setSystemPrompt(newPrompts);
    };
    
    const handleClearAll = () => {
        setSystemPrompt([]);
  };
  
  return (
      <div
      className="
            flex flex-col gap-4 items-center justify-center
            mb-7 p-8
            overflow-y-auto
            overflow-x-visible
          "
    >
      <MessageBubble type="info">
        To edit a prompt, simply click and type. Changes are saved
        automatically.
      </MessageBubble>
      <div
        className="
          flex flex-col gap-3
          border-t border-b border-violet-300
          py-6 w-11/12 animate animate-fade-up"
      >
      {systemPrompt &&
        systemPrompt.map((prompt, index) => (
          <div
            key={index}
            className={`flex items-center justify-between font-inter animate animate-fade-up w-full
                ring-0 rounded-xl px-6 
                shadow-lg shadow-black/20
                animate ${
                  focusIndex !== index
                    ? "animate-grow bg-gray-50 ring-violet-700 hover:ring-4"
                    : "bg-lime-50 ring-8 ring-lime-500"
                }`}
            style={{
              animationDelay: `${index * 0.05}s`,
              animationFillMode: "both",
            }}
          >
            <div className="flex items-center gap-4 w-full py-4">
              <input
                className="
                      w-full bg-transparent  focus:outline-none
                      animate focus:scale"
                type="text"
                placeholder="Enter a prompt"
                value={prompt}
                onChange={(e) => handlePromptChange(e, index)}
                onClick={() => {
                  setFocusIndex(index);
                }}
                onFocus={() => {
                  setFocusIndex(index);
                }}
              />
            </div>
            {focusIndex === index ? (
              <div
                className="
                    flex items-center gap-4
                    text-4xl text-lime-400 hover:text-lime-500
                    cursor-pointer
                    animate animate-grow
                    "
                onClick={() => setFocusIndex(null)} // Deselect the current prompt
                role="button"
                aria-label="Save Prompt"
              >
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
            ) : (
              <div
                className="
                    flex items-center gap-4
                    text-4xl text-rose-300 hover:text-rose-500
                    cursor-pointer
                    animate animate-grow
                    "
                onClick={() => handleRemovePrompt(index)}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </div>
            )}
          </div>
        ))}
              
      </div>
      <div className="flex items-center justify-center w-full gap-4">
        <ExpandingButton
          variant="main"
          text="Add New Prompt"
          onClick={handleAddPrompt}
        >
          <FontAwesomeIcon icon={faPlus} className="text-xl" />
        </ExpandingButton>
        <ExpandingButton
          variant="cancel"
          text="Clear All Prompts"
          onClick={handleClearAll}
        >
          <FontAwesomeIcon icon={faTrash} />
        </ExpandingButton>
      </div>
    </div>
  );
};
export default SystemPromptMenu;
