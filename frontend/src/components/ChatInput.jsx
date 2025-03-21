import {
  faPaperPlane,
  faSliders,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandingButton from "./ExpandingButton";
import PropTypes from "prop-types";

const ChatInput = ({
  name = "userPrompt",
  onChange,
  onSubmit,
  value,
  loading,
  stopGenerating,
}) => {
  return (
    <div
      className="
            flex justify-center
            border border-violet-700/70
            backdrop-blur-sm
            fixed bottom-20 z-20
            bg-gradient-to-br from-violet-200/5 to-violet-700/10 from-80%
            bg-white/60
            rounded-full 
            shadow-2xl shadow-black/30
            hover:shadow-violet-950/50
            w-full max-w-4/5
            p-4 gap-4 
            animate duration-800 
            translate-y-0 hover:-translate-y-1.5
            "
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
