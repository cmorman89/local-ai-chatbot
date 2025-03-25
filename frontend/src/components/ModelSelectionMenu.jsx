import {
  faCircleXmark,
  faHexagonNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModelBubble from "./ModelBubble";
import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

const ModelSelectionMenu = ({ isOpen, setIsOpen, setModel, serverUrl }) => {
  const url = `${serverUrl}/v1/models`;
  const [modelList, setModelList] = useState([]);
  const { data, loading, error } = useFetchData(url);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModelSelect = (model) => {
    setModel(model);
    setIsOpen(false);
  };

  useEffect(() => {
    if (data.data) {
      setModelList([]);
      for (const model of data.data) {
        setModelList((prev) => [...prev, model.id]);
      }
    }
  }, [data, loading]);

  return (
    <div
      className={`
        ${isOpen ? "flex" : "hidden"}
        h-screen w-screen
        bg-black/30
        pt-18
        fixed left-0 top-0 z-40
        backdrop-blur-sm
        animate
        `}
    >
      <div
        className="
        flex flex-col
        bg-gray-200
        max-h-4/5 w-2/3 max-w-250
        m-auto
        rounded-2xl
        shadow-xl shadow-black/20"
      >
        <div
          className="
          flex items-center justify-evenly
          bg-violet-700
          text-white
          font-medium font-inter text-2xl
          rounded-t-2xl shadow-lg shadow-black/20
          py-3 px-8
          "
        >
          <div className="flex flex-grow items-center justify-center gap-4">
            <FontAwesomeIcon
              icon={faHexagonNodes}
              className="font-normal text-violet-200 text-2xl"
            />
            Model Selection
          </div>
          <div
            className="cursor-pointer hover:text-red-100 animate animate-grow"
            onClick={handleClose}
            role="button"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faCircleXmark} className="text-2xl" />
          </div>
        </div>
        <div
          className="
            flex flex-col gap-4
            mb-7 p-8
            overflow-y-auto
            overflow-x-visible
          "
        >
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {modelList
            .slice()
            .sort((a, b) => a.localeCompare(b))
            .map((model, i) => (
              <ModelBubble
                key={i}
                modelId={model}
                description="This is a description of the model"
                onClick={() => handleModelSelect(model)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ModelSelectionMenu;
