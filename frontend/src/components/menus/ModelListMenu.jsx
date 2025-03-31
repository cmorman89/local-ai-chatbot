import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import useLoadModel from "../../hooks/useLoadModel";
import ModelBubble from "../ModelBubble";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModelListMenu = ({
  setActiveMenu,
  serverUrl,
  setModel,
  setModelLoading,
}) => {
  const modelEndpoint = `${serverUrl}/v1/models`;
  const [modelList, setModelList] = useState([]);
  const { data, loading, error } = useFetchData(modelEndpoint);
  const {
    response,
    loading: modelLoading,
    loadModel,
  } = useLoadModel(serverUrl);

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

  useEffect(() => {
    setModelLoading(modelLoading);
  }, [modelLoading]);
  return (
    <div
      className="
            flex flex-col gap-4
            p-8 mb-2 w-full
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
  );
};
export default ModelListMenu;
