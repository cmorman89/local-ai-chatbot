import PropTypes from "prop-types";
import ChatUserIcon from "./ChatUserIcon";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github.css";
import rehypeHighlight from "rehype-highlight";

const ChatBubble = ({ isUser = false, children, title = null }) => {
  return (
    <div
      className={`
        flex w-full mr-16
        ${
          isUser ? "justify-end origin-right my-6 mr-10" : "justify-center origin-top"
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
            : "bg-gradient-to-br from-white to-gray-50"
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
        `}
      >
        <div className="flex flex-col flex-grow justify-center overflow-hidden">
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
