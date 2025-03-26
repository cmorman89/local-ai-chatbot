import useModelParser from "../hooks/useModelParser";

const ChatIntro = ({ modelId }) => {
  const model = useModelParser(modelId);
  const { _, paramCount, arch, Icon, IconCombined, IconCombinedLg } = model;
  return (
    <div
      className="
      flex flex-col items-center
      px-30 py-10
      rounded-4xl
        font-inter
        bg-gray-50
        shadow-xl shadow-black/20
      "
    >
      <div>Current Model:</div>
      <div className="m-6">
        <IconCombinedLg />
      </div>
      <div className="italic">Model: {model.modelId}</div>
    </div>
  );
};
export default ChatIntro;
