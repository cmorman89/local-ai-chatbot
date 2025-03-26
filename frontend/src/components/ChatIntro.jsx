import useModelParser from "../hooks/useModelParser";

const ChatIntro = ({ modelId }) => {
  const { _, paramCount, arch, Icon, IconCombined } = useModelParser(modelId);
  return (
    <div
      className="
      flex flex-col items-center
        font-inter
      "
      >
          <div>Current Model:</div>
      <div className="scale-250 m-12">
        <IconCombined />
      </div>
    </div>
  );
};
export default ChatIntro;
