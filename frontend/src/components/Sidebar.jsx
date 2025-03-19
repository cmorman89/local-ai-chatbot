import {
  faGear,
  faHistory,
  faHouse,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div
      className="
                flex flex-col justify-between items-start
                fixed z-40
                bg-gray-900
                h-full
                w-24
                pl-8 hover:pl-12
                pt-50 pb-28 gap-12
                text-3xl
                animate animate-menu
                "
    >
      <div className="flex flex-col gap-12 items-center justify-center text-center">
        <FontAwesomeIcon
          icon={faHouse}
          className="text-gray-100 animate animate-menu-icon cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faMessage}
          className="text-gray-100 animate animate-menu-icon cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faHistory}
          className="text-gray-100 animate animate-menu-icon cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-12 items-center justify-center text-center">
        <FontAwesomeIcon
          icon={faUser}
          className="text-gray-100 animate animate-menu-icon cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faGear}
          className="text-gray-100 animate animate-menu-icon cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Sidebar;
