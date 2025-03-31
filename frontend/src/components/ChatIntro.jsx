import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useModelParser from "../hooks/useModelParser";
import { faGear, faRefresh } from "@fortawesome/free-solid-svg-icons";

const ChatIntro = ({ modelId, setModelSelectionOpen, modelLoading }) => {
  const model = useModelParser(modelId);
  const { _, paramCount, arch, Icon, IconCombined, IconCombinedLg, color } =
    model;

  return (
    <div
      className="
        flex
        mt-10
        px-12 md:px-30 py-10
        rounded-4xl
        font-inter
        bg-gray-50 border-4
        shadow-xl shadow-black/20
        animate
      "
      style={{ backgroundColor: `${color}20`, borderColor: `${color}80` }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="">
          {modelLoading ? (
            <span className="flex items-center gap-2 text-5xl font-inter font-semibold text-gray-800">
              <FontAwesomeIcon
                icon={faGear}
                className="animate-rotate mr-2 text-gray-500"
              />
              Loading...
            </span>
          ) : (
            <IconCombinedLg />
          )}
        </div>
        <div
          className="w-full h-px"
          style={{ backgroundColor: `${color}50` }}
        ></div>
        <div
          className="flex flex-col md:flex-row text-gray-800 items-center gap-1.5 italic p-4 bg-white/60 border border-gray-400 rounded-full animate animate-grow cursor-pointer hover:shadow-lg"
          role="button"
          onClick={() => setModelSelectionOpen(true)}
        >
          <span className="font-semibold">Model:</span>
          {model.modelId}{" "}
          <FontAwesomeIcon icon={faRefresh} className="text-xl ml-2" />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-500">Parameters:</span>
          <span className="text-sm">
            {paramCount ? `${paramCount}B` : "N/A"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-500">Architecture:</span>
          <span className="text-sm">{arch ? `${arch}` : "N/A"}</span>
        </div>
      </div>
    </div>
  );
};
export default ChatIntro;
