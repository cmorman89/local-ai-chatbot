import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const SidebarItem = ({ icon, children, isFullyExpanded, url }) => {
  return (
    <div
      className={`
                flex origin-left items-center
                gap-8
                animate animate-menu-icon
                cursor-pointer
                font-inter
            `}
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-gray-200 hover:text-inherit"
      />
      <p className="block text-xl ">{children}</p>
    </div>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.node,
  isFullyExpanded: PropTypes.bool,
  url: PropTypes.string,
};
export default SidebarItem;
