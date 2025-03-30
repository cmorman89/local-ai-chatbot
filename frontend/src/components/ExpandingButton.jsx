import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ExpandingButton = ({ text, children, onClick, variant = "default" }) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth);
    }
  }, [text]);

  const buttonStyles = {
    main: "bg-violet-700 cursor-pointer text-white",
    default: "bg-violet-400 hover:bg-violet-700 cursor-pointer text-white",
    cancel: "bg-rose-500 cursor-pointer text-white",
    disabled: "bg-gray-500 cursor-not-allowed text-white",
    clear: "bg-rose-300 hover:bg-rose-500 cursor-pointer text-white",
  };

  return (
    <motion.div
      title={text}
      className={`
        flex items-center text-center rounded-full shadow-md shadow-black/20
        gap-4 hover:gap-2 
        text-transparent hover:text-gray-100
        h-14 min-h-14 max-h-14 w-14 min-w-14 pl-4.5 overflow-hidden
        text-xl ${buttonStyles[variant]}
      `}
      role="button"
      onClick={onClick}
      whileHover={{ width: `${4.5 + width / 16}rem` }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
      <span
        ref={textRef}
        className="ml-2 text-nowrap font-medium text-sm text-violet-50 "
      >
        {text}
      </span>
    </motion.div>
  );
};

ExpandingButton.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["default", "cancel", "disabled", "refresh"]),
};

export default ExpandingButton;
