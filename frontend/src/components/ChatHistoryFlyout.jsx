import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HistoryBubble from "./HistoryBubble";

const ChatHistoryFlyout = () => {
  return (
    <div
      className="
        flex flex-col items-center
        fixed right-0 z-20
        translate-x-80 hover:translate-x-0
        my-10
        w-1/4 h-4/5
        overflow-hidden
        p-8 gap-8
        bg-white/60 b backdrop-blur-xl
        rounded-l-4xl
        shadow-xl shadow-black/25
        animate animate-menu
        "
    >
      <div
        className="
            flex items-center justify-center 
            w-full gap-4 
            bg-violet-700 
            rounded-2xl 
            text-lg 
            p-4 
            shadow-xl shadow-black/20 
            animate animate-grow
            "
      >
        <FontAwesomeIcon icon={faHistory} className="text-violet-50" />
        <h2 className="font-inter font-semibold text-violet-50">
          Recent Chat History
        </h2>
      </div>
      <HistoryBubble
        bg={"bg-neutral-700 hover:bg-violet-600 hover:shadow-xl"}
      ></HistoryBubble>
      <HistoryBubble
        bg={"bg-neutral-700/60 hover:bg-violet-600 hover:shadow-xl"}
      ></HistoryBubble>
      <HistoryBubble
        bg={"bg-neutral-700/40 hover:bg-violet-600 hover:shadow-xl"}
      ></HistoryBubble>
      <HistoryBubble
        bg={"bg-neutral-700/20 hover:bg-violet-600 hover:shadow-xl"}
      ></HistoryBubble>
      <HistoryBubble
        bg={"bg-neutral-700/10 hover:bg-violet-600 hover:shadow-xl"}
      ></HistoryBubble>
    </div>
  );
};
export default ChatHistoryFlyout;
