import {
  faPaperPlane,
  faSliders,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandingButton from "./ExpandingButton";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

/**
 * ChatInput component renders an interactive input field for user prompts
 * with additional controls for sending messages, stopping generation, and
 * editing system prompts. It dynamically adjusts its appearance and behavior
 * based on the provided props and user interactions.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.name="userPrompt"] - The name attribute for the input field.
 * @param {function} props.onChange - Callback function triggered when the input value changes.
 * @param {function} props.onSubmit - Callback function triggered when the user submits the input (e.g., pressing Enter or clicking the send button).
 * @param {string} props.value - The current value of the input field.
 * @param {boolean} props.loading - Indicates whether a response is being generated.
 * @param {function} props.stopGenerating - Callback function to stop the response generation.
 * @param {number} props.messageCount - The number of messages in the chat, used to adjust the component's position.
 * @param {function} props.setChatSettingsOpen - Callback function to open the chat settings modal.
 * @param {string|null} props.modelId - The ID of the selected model. If null, input and actions are disabled.
 *
 * @returns {JSX.Element} The rendered ChatInput component.
 */
const ChatInput = ({
  name = "userPrompt",
  onChange,
  onSubmit,
  value,
  loading,
  stopGenerating,
  messageCount,
  setChatSettingsOpen,
  modelId,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isHover || isFocused) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isHover, isFocused]);

  useEffect(() => {
    if (loading) {
      setIsFocused(false);
    }
  }, [loading]);
  return (
    <div
      className={`
            flex justify-center
            ${
              loading
                ? "border-transparent border-8"
                : isActive
                ? "border-violet-700 border-4"
                : "border-gray-400 border-1"
            }
            backdrop-blur-lg 
            ${
              messageCount > 1
                ? "fixed bottom-20"
                : "sticky bottom-1/3 lg:bottom-1/2"
            }
            z-20
            rounded-full 
            ${isActive ? "shadow-violet-950/50" : "shadow-black/20"}
            shadow-2xl
            w-full max-w-4/5
            p-4 gap-4 
            animate duration-800 
            ${isActive ? "-translate-y-1.5" : "translate-y-0"}
            ${isActive ? "bg-white/60" : "bg-white/20"}
            ${!modelId && "cursor-not-allowed"}
            animate-border
            `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <input
        type="text"
        disabled={loading || !modelId}
        autoFocus
        autoComplete="off"
        autoCorrect="on"
        aria-autocomplete="off"
        name={name}
        placeholder={
          modelId
            ? loading
              ? "Generating response..."
              : "What would you like to ask?"
            : "Select a model to start chatting"
        }
        className={`
              flex
              focus:outline-none 
              w-full mx-4
              text-violet-950/80 font-inter
              placeholder:text-violet-950/50 placeholder:italic
              ${loading || !modelId ? "cursor-not-allowed" : "cursor-text"}
              `}
        value={value}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {loading ? (
        <ExpandingButton
          text="Stop Generating"
          onClick={stopGenerating}
          variant="cancel"
        >
          <FontAwesomeIcon icon={faXmark} className="text-violet-50 ml-0.5" />
        </ExpandingButton>
      ) : (
        <ExpandingButton
          text="Send Message"
          variant={!modelId ? "disabled" : "default"}
          onClick={onSubmit}
        >
          <FontAwesomeIcon icon={faPaperPlane} className="text-violet-50" />
        </ExpandingButton>
      )}
      <ExpandingButton
        text="Edit System Prompt"
        variant={loading ? "disabled" : "default"}
        onClick={() => setChatSettingsOpen(true)}
      >
        <FontAwesomeIcon icon={faSliders} className="text-violet-50" />
      </ExpandingButton>
    </div>
  );
};

ChatInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
ChatInput.defaultProps = {
  name: "userPrompt",
};
export default ChatInput;
