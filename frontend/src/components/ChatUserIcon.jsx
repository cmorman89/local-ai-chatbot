import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatUserIcon = () => {
  return (
    <div
      className={`
                flex items-center justify-center
                mr-6 mt-4
                w-15 h-15 bg-violet-700
                rounded-full
                shadow-lg shadow-black/20
                `}
    >
      <FontAwesomeIcon icon={faUser} className="text-violet-200 text-3xl" />
    </div>
  );
};
export default ChatUserIcon;
