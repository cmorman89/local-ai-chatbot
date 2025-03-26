import {
  faPaperPlane,
  faSliders,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandingButton from "./ExpandingButton";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ChatInput = ({
  name = "userPrompt",
  onChange,
  onSubmit,
  value,
  loading,
  stopGenerating,
  messageCount,
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
              isActive
                ? "border-violet-700 border-4"
                : "border-gray-400 border-1"
            }
            border-gray-400 hover:border-violet-700
            backdrop-blur-lg
            fixed 
            ${messageCount > 1 ? "bottom-20" : "bottom-1/3 lg:bottom-1/2"}
            z-20
            rounded-full 
            ${isActive ? "shadow-violet-950/50" : "shadow-black/20"}
            shadow-2xl
            w-full max-w-4/5
            p-4 gap-4 
            animate duration-800 
            ${isActive ? "-translate-y-1.5" : "translate-y-0"}
            ${isActive ? "bg-white/60" : "bg-white/20"}
            `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <input
        type="text"
        disabled={loading}
        autoFocus
        autoComplete="off"
        autoCorrect="on"
        aria-autocomplete="off"
        name={name}
        placeholder={
          loading ? "Generating response..." : "What would you like to ask?"
        }
        className={`
              flex
              focus:outline-none 
              w-full mx-4
              text-violet-950/80 font-inter
              placeholder:text-violet-950/50 placeholder:italic
              ${loading ? "cursor-not-allowed" : "cursor-text"}
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
        <ExpandingButton text="Send Message" onClick={onSubmit}>
          <FontAwesomeIcon icon={faPaperPlane} className="text-violet-50" />
        </ExpandingButton>
      )}
      <ExpandingButton
        text="Edit System Prompt"
        variant={loading ? "disabled" : "default"}
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
