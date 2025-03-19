import PropTypes from "prop-types";

const MainContentWindow = ({ children }) => {
  return (
    <div className="flex w-full h-full relative">
      <div
        className="
        h-80 w-screen
        fixed bottom-0 left-0
        bg-gradient-to-b from-25% to-75% from-transparent to-white
        "
      ></div>
      {children}
    </div>
  );
};
MainContentWindow.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainContentWindow;
