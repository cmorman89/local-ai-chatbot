import {
  faCircleXmark,
  faHexagonNodes,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModelBubble from "./ModelBubble";
import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

const ModelSelectionMenu = ({ isOpen, setIsOpen, setModel }) => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [modelList, setModelList] = useState([]);
  const { data, loading, error } = useFetchData(
    "http://192.168.162:1234/v1/models"
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
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
        h-2/3 w-2/3
        m-auto
        rounded-4xl
        shadow-xl shadow-black/20"
      >
        <div
          className="
          flex items-center justify-evenly
          bg-gradient-to-br from-violet-800 to-violet-600
          text-white
          font-medium font-inter text-3xl
          rounded-t-4xl shadow-lg shadow-black/20
          py-8 px-8
          "
        >
          <div className="flex flex-grow items-center justify-center gap-8">
            <FontAwesomeIcon
              icon={faHexagonNodes}
              className="font-normal text-violet-200 text-4xl"
            />
            Model Selection
          </div>
          <div
            className="cursor-pointer"
            onClick={handleClose}
            role="button"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faCircleXmark} className="text-4xl" />
          </div>
        </div>
        <div
          className="
            grid grid-cols-1 lg:grid-cols-3 gap-8
            mb-7 px-8 pt-8 pb-1
            overflow-y-auto
          "
        >
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {modelList.map((model, i) => (
            <ModelBubble
              key={i}
              title={model}
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
