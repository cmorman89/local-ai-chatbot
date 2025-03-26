import useModelParser from "../hooks/useModelParser";

const ChatIntro = ({ modelId }) => {
  const model = useModelParser(modelId);
  const { _, paramCount, arch, Icon, IconCombined, IconCombinedLg } = model;
  return (
    <div
      className="
        flex
        px-30 py-10
        rounded-4xl
        font-inter
        bg-gray-50
        shadow-xl shadow-black/20
      "
    >
      <div className="flex flex-col items-center">
        <div className="m-6">
          <IconCombinedLg />
        </div>
        <div className="italic p-4 bg-white border border-gray-400 rounded-full mb-4">
          Model: {model.modelId}
        </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-500">Parameters:</span>
            <span className="text-sm">
              {paramCount ? `${paramCount}B` : "N/A"}
            </span>
          
        </div>
      </div>
    </div>
  );
};
export default ChatIntro;
