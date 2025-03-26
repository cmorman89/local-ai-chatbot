
import useModelParser from "../hooks/useModelParser";

const ModelBubble = ({ onClick, modelId }) => {
  const model = useModelParser(modelId);
  const paramCount = model.paramCount;
  const IconCombined = model.IconCombined;

  return (
    <div
      className="
        grid grid-cols-4 lg:grid-cols-8
        items-center
        bg-gray-100
        ring-0 hover:ring-4 ring-violet-700
        font-inter
        rounded-2xl
        py-2 px-4
        shadow-xl shadow-black/20
        cursor-pointer
        animate animate-grow animate-fade-up
        "
      onClick={onClick}
    >
      <div className="flex col-span-5 justify-center lg:justify-start">
        <div className="py-1 px-3 bg-violet-100 rounded-full border border-violet-300 font-mono text-lg lg:text-base mb-4 lg:mb-0">
          {modelId}
        </div>
      </div>
      <div className="flex col-span-2 justify-center border-r lg:border-l border-violet-400">
        <div className="py-1 px-3 bg-gray-100 rounded-full">
          <IconCombined />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="py-1 px-3 bg-gray-100 rounded-full">
          {paramCount ? (
            <span className="text-lg">
              {paramCount}
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
