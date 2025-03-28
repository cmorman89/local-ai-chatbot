import PropTypes from "prop-types";

const MainContentWindow = ({ children }) => {
  return (
    <div className="flex w-full h-full relative pl-24 pb-40">
      <div
        className="
        h-80 w-screen
        fixed bottom-0 left-0 z-20
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
