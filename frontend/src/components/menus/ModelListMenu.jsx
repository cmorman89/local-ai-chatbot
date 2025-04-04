import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import ModelBubble from "./ModelBubble";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageBubble from "../MessageBubble";

const ModelListMenu = ({
  setActiveMenu,
  serverUrl,
  setModel,
  loadModel,
  darkMode,
}) => {
  const modelEndpoint = `${serverUrl}/v1/models`;
  const [modelList, setModelList] = useState([]);
  const { data, loading, error } = useFetchData(modelEndpoint);

  const handleModelSelect = (model) => {
    setModel(model);
    loadModel(model);
    setActiveMenu(null);
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
      className="
            flex flex-col gap-4
            p-8 mb-2 w-full
            overflow-y-auto
            overflow-x-visible
          "
    >
      <div className="flex justify-center items-center mx-2 md:mx-1/4">
        {loading && <MessageBubble>Loading models...</MessageBubble>}
        {!loading && !error && modelList.length === 0 && (
          <MessageBubble type="warning">
            <p className="font-bold">No Models Found: </p>
            <p>Please download a model to load.</p>
          </MessageBubble>
        )}
        {!loading && error && (
          <MessageBubble type="error">
            <p className="font-bold">Error Fetching Models: </p>
            <p>Please check the server settings.</p>
            <p className="text-sm border-t border-rose-800/50 mt-2 pt-2 text-rose-950/50">
              (<span className="font-medium">Error Message: </span>
              {error.message})
            </p>
          </MessageBubble>
        )}
      </div>
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
            darkMode={darkMode}
          />
        ))}
    </div>
  );
};
export default ModelListMenu;
