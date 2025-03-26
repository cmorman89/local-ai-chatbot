import PropTypes from "prop-types";

const ExpandingButton = ({ text, children, onClick, variant = "default" }) => {
  const buttonStyles = {
    default: "bg-violet-700 cursor-pointer",
    cancel: "bg-rose-500 cursor-pointer",
    disabled: "bg-gray-500 cursor-not-allowed",
    refresh: "backdrop-blur-lg bg-white/30 cursor-pointer",
  };
  return (
    <div
      title={text}
      className={`
      flex items-center 
      text-start hover:justify-center
      rounded-full shadow-md shadow-black/20
      h-14 min-h-14 max-h-14 
      w-14 min-w-14 hover:w-80
      pl-4.5
      ${buttonStyles[variant]}
      text-xl
      overflow-hidden
      animate
      `}
    >
      {children}
      <div
        className="flex text-nowrap mx-5 font-medium text-white text-sm"
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
