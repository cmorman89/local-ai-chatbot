import {
  faPaperPlane,
  faSliders,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandingButton from "./ExpandingButton";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ChatFormInput from "./ChatFormInput";
import ChatIntro from "./ChatIntro";

const ChatInput = ({
  name = "userPrompt",
  onChange,
  onSubmit,
  onClear,
  value,
  loading,
  stopGenerating,
  messageCount,
  modelId,
  modelLoading,
  setActiveMenu,
}) => {
  const [inputSize, setInputSize] = useState(1);
  const [isHover, setIsHover] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

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

  useEffect(() => {
    if (messageCount > 1) {
      setIsDocked(true);
    }
    if (messageCount <= 1) {
      setIsDocked(false);
    }
  }, [messageCount]);
  return (
    <div
      className={`
        flex flex-col justify-center gap-8 z-20
        ${inputSize === 1 ? "items-center" : "items-end"}
        w-full
        animate
        px-8
        `}
    >
      <div
        className={`w-full flex justify-center animate ${
          isDocked ? "opacity-0 h-0 translate-y-25" : "opacity-100"
        }`}
      >
        <ChatIntro
          modelId={modelId}
          modelLoading={modelLoading}
          setActiveMenu={setActiveMenu}
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <ChatFormInput
          value={value}
          onChange={onChange}
          inputSize={inputSize}
          setInputSize={setInputSize}
          onSubmit={onSubmit}
        />
        <div className="flex items-center gap-2 justify-center">
          {loading ? (
            <ExpandingButton
              text="Stop Generating"
              onClick={stopGenerating}
              variant="cancel"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-violet-50 ml-0.5"
              />
            </ExpandingButton>
          ) : (
            <ExpandingButton
              text="Send Message"
              variant={!modelId ? "disabled" : "main"}
              onClick={onSubmit}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-violet-50" />
            </ExpandingButton>
          )}
          <ExpandingButton
            text="Edit System Prompt"
            variant={loading ? "disabled" : "default"}
            onClick={() => setActiveMenu('systemPrompt')}
          >
            <FontAwesomeIcon icon={faSliders} className="text-violet-50" />
          </ExpandingButton>
          {messageCount > 1 && !loading && (
            <ExpandingButton
              text="Clear Chat"
              variant="clear"
              onClick={onClear}
            >
              <FontAwesomeIcon icon={faTrash} className="text-violet-50" />
            </ExpandingButton>
          )}
        </div>
      </div>
      {/* <div
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
      </div> */}
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
