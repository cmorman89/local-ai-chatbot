import { useEffect, useState } from "react";

const ModelBubble = ({ children, onClick, title }) => {
  const [model, setModel] = useState({
    title: title,
    params: null,
    type: null,
  });

  const images = {
    llama: "/llama.png",
    gemma: "/gemma.png",
  };

  useEffect(() => {
    const parseModelTitle = (title) => {
      const patterns = {
        params: /([0-9]+)b/,
        type: /(gemma|llama)/,
      };
      const parts = title.split("_");
      for (const part of parts) {
        for (const key in patterns) {
          const match = part.match(patterns[key]);
          if (match) {
            setModel((prevModel) => ({
              ...prevModel,
              [key]: match[1],
            }));
          }
        }
      }
    };
    parseModelTitle(title);
  }, [title]);
  return (
    <div
      className={`
          flex flex-col justify-center items-center relative
          bg-gray-300 hover:bg-violet-700
          text-gray-600 hover:text-gray-200
          w-full min-h-64 max-h-64
          shadow-md shadow-violet-800/20
          rounded-4xl
          p-4 pb-2
          animate
          overflow-hidden
          cursor-pointer
          `}
      role="button"
      onClick={onClick}
    >
      {title && (
        <h3 className={`text-2xl font-inter font-medium mb-2 p-2`}>{title}</h3>
      )}
      {children}
      <div
        className="
        flex justify-between items-baseline
        w-full
        mt-auto
        font-inter
        "
      >
        {model.type && (
          <img
            className="block w-24 h-auto"
            src={images[model.type]}
            alt={model.type}
          />
        )}
        {model.params && (
          <div
            className="
            flex flex-grow justify-end  gap-1
            text-4xl font-medium italic text-gray-400
            "
          >
            <span className="font-bold">{model.params}</span> B
          </div>
        )}
      </div>
    </div>
  );
};
export default ModelBubble;
