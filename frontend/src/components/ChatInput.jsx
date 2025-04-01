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
  darkMode,
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
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
          darkMode={darkMode}
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-2 justify-center items-end">
        <ChatFormInput
          value={value}
          onChange={onChange}
          inputSize={inputSize}
          setInputSize={setInputSize}
          onSubmit={onSubmit}
          isActive={isActive}
          loading={loading}
          setIsFocused={setIsFocused}
          darkMode={darkMode}
        />
        <div
          className={`flex justify-self-end h-full gap-2 justify-center`}
        >
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
            onClick={() => setActiveMenu("systemPrompt")}
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
