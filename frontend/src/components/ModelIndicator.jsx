import {
  faGear,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useModelParser from "../hooks/useModelParser";

const ModelIndicator = ({ setActiveMenu, model, modelLoading }) => {
  const [hasModel, setHasModel] = useState(false);
  const { Icon } = useModelParser(model);

  useEffect(() => {
    if (model) {
      setHasModel(true);
    }
  }, [model]);

  return (
    <div
      className="
          flex flex-nowrap gap-2 lg:gap-4 items-center
          px-3 lg:px-6 py-2 rounded-full max-w-100
          font-inter text-violet-950 text-sm font-semibold
          bg-gray-100/90
          cursor-pointer
          text-nowrap
          animate
          "
      onClick={() => setActiveMenu("modelList")}
    >
      <div className="text-2xl">
        {modelLoading ? (
          <FontAwesomeIcon
            icon={faGear}
            className="animate-rotate text-gray-500"
          />
        ) : hasModel ? (
          <Icon />
        ) : (
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-red-700"
          />
        )}
      </div>
      <h2 className="text-nowrap">
        <span className="mr-1 text-nowrap">{hasModel && "Model:"}</span>
        <span
          className={`font-medium italic ${
            hasModel ? "text-violet-950" : "text-red-700"
          } text-nowrap`}
        >
          {modelLoading ? "Loading..." : hasModel ? model : "No Model"}
        </span>
      </h2>
    </div>
  );
};
export default ModelIndicator;
