import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModelIndicator = ({ setModelIsOpen, model = "Not Set" }) => {
  return (
    <div
      className="
          flex flex-nowrap gap-4 items-center
          px-6 py-2 rounded-full
          font-inter text-violet-950 text-lg font-semibold
          bg-gray-100/90
          cursor-pointer
          text-nowrap
          "
      onClick={() => setModelIsOpen(true)}
    >
      <FontAwesomeIcon icon={faHexagonNodes} className="text-2xl" />
      <h2 className="text-nowrap">
        <span className="mr-1 text-nowrap">Model:</span>
        <span className="font-medium italic text-violet-900 text-nowrap">
          {model}
        </span>
      </h2>
    </div>
  );
};
export default ModelIndicator;
