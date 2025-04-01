import useModelParser from "../../hooks/useModelParser";

const ModelBubble = ({ onClick, modelId, index, darkMode }) => {
  const { IconCombined, paramCount } = useModelParser(modelId);

  return (
    <div
      className={`
        ${darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-800"}
        grid grid-cols-4 sm:grid-cols-8
        items-cente
        ring-0 hover:ring-4 ${darkMode ? "ring-violet-300" : "ring-violet-700"}
        font-inter
        rounded-2xl
        p-2 pr-4
        shadow-xl shadow-black/20
        cursor-pointer
        animate animate-grow animate-fade-up-fast
        
        `}
      style={{
        animationDelay: `${index * 0.05}s`,
        animationFillMode: "both",
      }}
      onClick={onClick}
    >
      <div className="flex col-span-2 sm:col-span-5 row-span-2 sm:row-span-1 h-full justify-start">
        <div
          className={`${
            darkMode
              ? "bg-gray-700 border-violet-500/50 border-2"
              : "bg-transparent border-violet-300"
          } flex py-1 px-3 items-center  rounded-xl border  font-mono text-base h-full`}
        >
          {modelId}
        </div>
      </div>
      <div
        className={`flex col-span-2 justify-end sm:justify-center sm:border-l ${
          darkMode ? "border-violet-200/50" : "border-violet-400"
        }`}
      >
        <div
          className={`${
            darkMode ? "bg-gray-00" : "bg-transparent"
          } py-1 px-3 rounded-full`}
        >
          <IconCombined />
        </div>
      </div>
      <div className="flex justify-end col-span-2 sm:col-span-1 ">
        <div
          className={`${
            darkMode ? "bg-gray-00" : "bg-transparent"
          } py-1 px-3 rounded-full`}
        >
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
