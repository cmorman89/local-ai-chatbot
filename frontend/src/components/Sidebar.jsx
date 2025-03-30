import {
  faGear,
  faHexagonNodes,
  // faHistory,
  faHouse,
  faMessage,
  faPlug,
  // faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ setActiveMenu }) => {
  return (
    <div
      className="
                flex flex-col justify-between items-start
                fixed z-40
                bg-gray-900
                h-full
                w-14 md:w-24
                pl-3 md:pl-8 hover:pl-12
                pt-16 pb-28 gap-12
                text-3xl
                animate animate-menu
                overflow-hidden
                "
    >
      <div className="flex flex-col gap-12 items-start justify-center text-center">
        <SidebarItem icon={faHouse} url="/">
          Home
        </SidebarItem>
        <SidebarItem icon={faMessage} url="/chat">
          Chat
        </SidebarItem>
        <SidebarItem icon={faHexagonNodes} onClick={() => setActiveMenu('modelList')}>
          Models
        </SidebarItem>
        <SidebarItem icon={faPlug} onClick={() => setActiveMenu('connection')}>
          Connection
        </SidebarItem>
      </div>
    </div>
  );
};
export default Sidebar;
