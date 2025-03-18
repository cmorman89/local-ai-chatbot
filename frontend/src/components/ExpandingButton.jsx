import PropTypes from "prop-types";

const ExpandingButton = ({ text, children }) => {
  return (
    <div
      title={text}
      className="
      flex items-center 
      text-start hover:justify-center
      rounded-full shadow-md shadow-black/20
      h-14 min-h-14 max-h-14 
      w-14 min-w-14 hover:w-80
      pl-4.5
      bg-violet-700 
      text-xl
      cursor-pointer 
      animate duration-800
      overflow-hidden"
    >
      {children}
      <div className="flex text-nowrap mx-5 font-medium text-white text-sm">
        {text}
      </div>
    </div>
  );
};

ExpandingButton.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ExpandingButton;
