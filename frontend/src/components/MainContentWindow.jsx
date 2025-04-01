import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const MainContentWindow = ({ children, darkMode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // When darkMode changes, make isTransitioning true for 1000ms
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [darkMode]);
  return (
    <div
      className="flex w-full h-full
        pl-14 md:pl-24
        relative left-0 top-0
        "
    >
      {children}
      <div
        className={`
        h-16 lg:h-40 w-screen
        fixed bottom-0 left-0 z-19
        bg-gradient-to-b from-25% to-75% from-transparent 
        ${isTransitioning ? "opacity-0" : "opacity-100"}
        ${darkMode ? "to-gray-700" : "to-gray-200"}
        animate 
        `}
      ></div>
    </div>
  );
};
MainContentWindow.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainContentWindow;
