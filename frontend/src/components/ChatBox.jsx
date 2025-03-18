import PropTypes from "prop-types";

const ChatBox = ({ children }) => {
  return (
    <div
      className="
        flex flex-col 
        w-full p-8 ml-24 mr-24
        gap-4
        "
    >
      {children}
    </div>
  );
};

ChatBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChatBox;
