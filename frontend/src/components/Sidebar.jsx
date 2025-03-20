import {
  faGear,
  faHistory,
  faHouse,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarItem from "./SidebarItem";

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
                pt-16 pb-28 gap-12
                text-3xl
                animate animate-menu
                overflow-hidden
                "
    >
      <div className="flex flex-col gap-12 items-start justify-center text-center">
        <SidebarItem icon={faHouse}>Home</SidebarItem>
        <SidebarItem icon={faMessage}>Chat</SidebarItem>
        <SidebarItem icon={faHistory}>History</SidebarItem>
      </div>
      <div className="flex flex-col gap-12 items-start justify-center text-center">
        <SidebarItem icon={faUser}>Profile</SidebarItem>
        <SidebarItem icon={faGear}>Settings</SidebarItem>
      </div>
    </div>
  );
};
export default Sidebar;
