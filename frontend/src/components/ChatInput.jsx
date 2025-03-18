import { faPaperPlane, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandingButton from "./ExpandingButton";

const ChatInput = () => {
  return (
    <div
      className="
            flex justify-end
            border border-violet-700/70
            backdrop-blur-sm
            fixed bottom-20 z-20
            bg-gradient-to-br from-violet-200/5 to-violet-700/10 from-80%
            bg-white/60
            rounded-full 
            shadow-2xl shadow-black/30
            hover:shadow-violet-950/50
            w-full max-w-[calc(100vw-18rem)] ml-36
            p-4 gap-4
            animate duration-800 
            translate-y-0 hover:-translate-y-1.5
            "
    >
      <input
        type="text"
        placeholder="What would you like to ask?"
        className="
              flex
              focus:outline-none 
              w-full mx-4
              font-medium text-lg text-violet-950/80
              placeholder:text-violet-950/30 placeholder:italic
              "
      />
      <ExpandingButton text="Send Message">
        <FontAwesomeIcon icon={faPaperPlane} className="text-violet-50" />
      </ExpandingButton>
      <ExpandingButton text="Edit System Prompt">
        <FontAwesomeIcon icon={faSliders} className="text-violet-50" />
      </ExpandingButton>
    </div>
  );
};
export default ChatInput;
