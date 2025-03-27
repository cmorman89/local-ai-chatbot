import PropTypes from "prop-types";

const ExpandingButton = ({ text, children, onClick, variant = "default" }) => {
  const buttonStyles = {
    default: "bg-violet-700 cursor-pointer text-white hover:w-80",
    cancel: "bg-rose-500 cursor-pointer text-white hover:w-80",
    disabled: "bg-gray-500 cursor-not-allowed text-white hover:w-80",
    refresh:
      "backdrop-blur-sm bg-white/30 hover:bg-red-100/30 ring-2 ring-gray-300/20hover:ring-red-400 cursor-pointer \
      text-gray-400 hover:text-red-900 animate-fade-up duration-1000 hover:w-40",
  };
  return (
    <div
      title={text}
      className={`
      flex items-center 
      text-start hover:justify-center
      rounded-full shadow-md shadow-black/20
      h-14 min-h-14 max-h-14 
      w-14 min-w-14 
      pl-4.5
      ${buttonStyles[variant]}
      text-xl
      overflow-hidden
      animate
      `}
    >
      {children}
      <div
        className="flex text-nowrap mx-5 font-medium text-sm"
        onClick={() => onClick()}
      >
        {text}
      </div>
    </div>
  );
};

ExpandingButton.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default ExpandingButton;
