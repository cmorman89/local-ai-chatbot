import PropTypes from "prop-types";
import ChatUserIcon from "./ChatUserIcon";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github.css";
import rehypeHighlight from "rehype-highlight";

const ChatBubble = ({ isUser = false, children, title = null, darkMode }) => {
  return (
    <div
      className={`
        flex w-full mr-16
        ${
          isUser
            ? "justify-end origin-right my-6 mr-10"
            : "justify-center origin-top"
        }
        animate animate-grow animate-fade-up
        `}
    >
      {/* {isUser && <ChatUserIcon />} */}

      <div
        className={`
        flex
        ${
          isUser
            ? "bg-gradient-to-br from-violet-800 to-violet-600"
            : darkMode
            ? "bg-gray-600"
            : "bg-gray-50"
        }
        ${
          isUser
            ? "shadow-lg shadow-black/20"
            : "shadow-lg shadow-purple-950/15"
        }
        ${isUser ? "w-fit min-w-25 max-w-200 italic" : "w-4/5"}
        
        font-inter text-left
        rounded-4xl 
        py-8 px-10
        animate animate-fade-up-fast
        `}
      >
        <div className="flex flex-col flex-grow justify-center overflow-hidden">
          {title && (
            <h3
              className={`text-xl ${
                isUser
                  ? "text-purple-100"
                  : darkMode
                  ? "text-violet-300"
                  : "text-violet-700"
              } font-semibold italic mb-2 animate animate-fade-up-fast`}
            >
              {title}
            </h3>
          )}
          <span
            className={`
            ${
              isUser
                ? "text-violet-100 font-medium"
                : darkMode
                ? "text-gray-300"
                : "text-gray-800"
            } }
            ${title ? "mx-2" : "mx-0"}
            animate animate-fade-up-fast
            markdown
            `}
          >
            {isUser && typeof children === "string" ? (
              children.replace(/---$|```\w*$/, "")
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {typeof children === "string"
                  ? children.replace(/---$|```\w+$/, "")
                  : children}
              </ReactMarkdown>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

ChatBubble.propTypes = {
  children: PropTypes.node.isRequired,
  isUser: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

ChatBubble.defaultProps = {
  title: "",
};

export default ChatBubble;
