import {
  faCircleXmark,
  faHexagonNodes,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModelBubble from "./ModelBubble";
import { use, useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

const ModelSelectionMenu = ({ isOpen, setIsOpen, setModel, serverUrl }) => {
  const url = `${serverUrl}/v1/models`;
  const [modelList, setModelList] = useState([]);
  const { data, loading, error } = useFetchData(url);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

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

  useEffect(() => {
    setModelList([]);
  }, [url]);
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
      onClick={(e) => handleOutsideClick(e)}
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
          {error && (
            <div className="flex justify-center">
              <div
                className="
                flex items-center justify-center font-inter gap-6 rounded-2xl border-red-600 border-2 px-8 py-4 w-fit bg-red-50"
              >
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="text-red-500 text-6xl"
                />
                <div className="flex flex-col">
                  <p className="text-2xl font-semibold text-red-700">Error:</p>
                  <p>{error.message}</p>
                </div>
              </div>
            </div>
          )}
          {modelList
            .slice()
            .sort((a, b) => a.localeCompare(b))
            .map((model, i) => (
              <ModelBubble
                key={i}
                index={i}
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
