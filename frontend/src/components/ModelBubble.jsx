import { Gemma, Meta } from "@lobehub/icons";
import { useEffect, useState } from "react";

const ModelBubble = ({ onClick, title }) => {
  const [model, setModel] = useState({
    title: title,
    params: null,
    type: "other",
  });

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
      className="
        grid grid-cols-8 items-center
        bg-gray-100 hover:bg-violet-700/80
        font-inter
        rounded-2xl
        py-2 px-4
        shadow-xl shadow-black/20
        cursor-pointer
        animate animate-grow
        "
      onClick={onClick}
    >
      <div className="flex col-span-5 border-r border-violet-400 font-mono">
        <div className="py-1 px-3 bg-gray-100 rounded-full">{model.title}</div>
      </div>
      <div className="flex col-span-2 justify-center border-r border-violet-400">
        <div className="py-1 px-3 bg-gray-100 rounded-full">
          {model.type === "gemma" && <Gemma.Combine type={"color"} />}
          {model.type === "llama" && <Meta.Combine type={"color"} />}
          {model.type === "other" && (
            <span className="text-gray-400">Other</span>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <div className="py-1 px-3 bg-gray-100 rounded-full">
          {model.params ? (
            <span className="text-lg">
              {model.params}
              <span className="text-gray-400">B</span>
            </span>
          ) : (
            <span className="text-gray-400">N/A</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default ModelBubble;
