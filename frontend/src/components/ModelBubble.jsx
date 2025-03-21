const ModelBubble = ({ children, onClick, title, active }) => {
  return (
    <div
      className={`
          flex flex-col
          bg-gray-300 hover:bg-violet-700
          text-gray-600 hover:text-gray-200
          w-full min-h-64 max-h-64
          shadow-md shadow-violet-800/20
          rounded-4xl
          p-8
          animate animate-grow
          overflow-hidden
          cursor-pointer
          `}
      role="button"
      onClick={onClick}
    >
      {title && <h3 className={`text-2xl font-inter font-medium mb-2`}>{title}</h3>}
      {children}
    </div>
  );
};
export default ModelBubble;
