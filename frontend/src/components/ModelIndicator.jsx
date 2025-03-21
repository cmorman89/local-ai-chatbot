import { faHexagonNodes, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModelIndicator = ({ model='Not Set' }) => {
  return (
    <div
      className="
          flex gap-4 items-center
          px-6 py-2 rounded-full
          font-inter text-violet-950 text-lg font-semibold
          bg-gray-100/90
          cursor-default
          
          "
    >
      <FontAwesomeIcon icon={faHexagonNodes} className="text-2xl" />
      <h2>
        <span className="mr-1">Model:</span>
        <span className="font-medium italic text-violet-900">{model}</span>
      </h2>
    </div>
  );
};
export default ModelIndicator;
