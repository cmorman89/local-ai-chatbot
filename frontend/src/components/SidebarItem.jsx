import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ icon, children, url, onClick = null }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`
                flex origin-left items-center
                gap-8
                animate animate-menu-icon
                cursor-pointer
                font-inter text-nowrap
            `}
      role="buttom"
      onClick={onClick ? onClick : () => navigate(url)}
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-gray-200 hover:text-inherit"
      />
      <p className="block text-xl text-nowrap">{children}</p>
    </div>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.node,
  url: PropTypes.string,
};
export default SidebarItem;
