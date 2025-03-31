import {
  faCircleXmark,
  faGear,
  faHexagonNodes,
  faPlug,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const MenuWindow = ({ children, activeMenu, setActiveMenu }) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState(null);

  // Set the title and icon based on the activeMenu
  useEffect(() => {
    switch (activeMenu) {
      case "connection":
        setTitle("Connection Settings");
        setIcon(faPlug);
        break;
      case "modelList":
        setTitle("Model List");
        setIcon(faHexagonNodes);
        break;
      case "systemPrompt":
        setTitle("System Prompt");
        setIcon(faSliders);
        break;
      default:
        setTitle("");
        setIcon(faGear);
        break;
    }
  }, [activeMenu]);
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) setActiveMenu(null);
  };

  const handleClose = () => {
    setActiveMenu(null);
  };
  return (
    <div
      className={`
        ${activeMenu ? "flex" : "hidden"}
        h-screen w-screen
        bg-black/30
        pt-18
        fixed left-0 top-0 z-40
        backdrop-blur-sm
        animate
        `}
      onClick={(e) => handleOutsideClick(e)}
    >
      <div
        className="
          flex flex-col
          bg-gray-200
          max-h-4/5 w-5/6 lg:w-2/3 max-w-250
          m-auto
          rounded-2xl
          shadow-xl shadow-black/20
          "
      >
        <div
          className="
            flex items-center justify-evenly
            bg-violet-700
            text-white
            font-medium font-inter text-2xl
            rounded-t-2xl shadow-lg shadow-black/20
            py-3 px-8
            "
        >
          <div className="flex flex-grow items-center justify-center gap-4">
            <FontAwesomeIcon
              icon={icon}
              className="font-normal text-violet-200 text-2xl"
            />
            {title}
          </div>
          <div
            className="cursor-pointer hover:text-rose-100 animate animate-grow"
            onClick={handleClose}
            role="button"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faCircleXmark} className="text-2xl" />
          </div>
        </div>

        <div
          className="
            flex flex-col gap-4 items-center
            overflow-y-auto
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default MenuWindow;
