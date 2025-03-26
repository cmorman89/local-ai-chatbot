import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useModelParser from "../hooks/useModelParser";

const ModelIndicator = ({ setModelIsOpen, model }) => {
  const [hasModel, setHasModel] = useState(false);
  const { _, paramCount, arch, Icon, IconCombined } = useModelParser(model);

  useEffect(() => {
    if (model) {
      setHasModel(true);
    }
  }, [model]);

  const text = model ? model : "Select Model";
  return (
    <div
      className="
          flex flex-nowrap gap-2 lg:gap-4 items-center
          px-3 lg:px-6 py-2 rounded-full
          font-inter text-violet-950 text-sm lg:text-lg font-semibold
          bg-gray-100/90
          cursor-pointer
          text-nowrap
          animate
          "
      onClick={() => setModelIsOpen(true)}
    >
      {/* <FontAwesomeIcon
        icon={faHexagonNodes}
        className="text-lg lg:text-2xl animate"
      /> */}
      <div className="scale-150">
        <Icon />
      </div>
      <h2 className="text-nowrap">
        <span className="mr-1 text-nowrap">{hasModel && "Model:"}</span>
        <span className="font-medium italic text-violet-900 text-nowrap">
          {text}
        </span>
      </h2>
    </div>
  );
};
export default ModelIndicator;
