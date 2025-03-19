import PropTypes from "prop-types";
import ChatUserIcon from "./ChatUserIcon";

const ChatBubble = ({ isUser = false, children, title = null }) => {
  return (
    <div
      className={`
        flex w-full
        ${isUser ? "justify-end origin-right" : "justify-center origin-center"}
        animate animate-grow animate-fade-up
        `}
    >
      {isUser && (
        <ChatUserIcon />
      )}

      <div
        className={`
        flex
        ${
          isUser
            ? "bg-gradient-to-br from-violet-800 to-violet-600"
            : "bg-gradient-to-br from-white to-violet-50"
        }
        ${
          isUser
            ? "shadow-lg shadow-black/20"
            : "shadow-lg shadow-purple-950/15"
        }
        ${isUser ? "w-fit min-w-50 max-w-200 mb-8 italic" : "w-4/5"}
        
        font-inter text-left
        rounded-4xl 
        py-8 px-10
        `}
      >
        <div className="flex flex-col flex-grow justify-center">
          {title && (
            <h3
              className={`text-xl ${
                isUser ? "text-purple-100" : "text-violet-800"
              } font-semibold italic mb-2`}
            >
              {title}
            </h3>
          )}
          <span
            className={`
            ${isUser ? "text-violet-100 font-medium" : "text-gray-700"}
            ${title ? "mx-2" : "mx-0"}
            `}>
            {children}
          </span>
        </div>
      </div>
    </div>
  );
};

ChatBubble.propTypes = {
  isUser: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

ChatBubble.defaultProps = {
  title: "",
};

export default ChatBubble;
