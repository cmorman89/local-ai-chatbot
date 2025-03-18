const HistoryBubble = ({ children, bg, title }) => {
  return (
    <div
      className={`
          flex flex-col
          ${bg ? bg : "bg-purple-700"}
          w-full min-h-64 max-h-64
          shadow-xl 
          rounded-4xl
          p-8
          animate animate-grow
          overflow-hidden
          cursor-pointer
          `}
    >
      {title && (
        <h3 className={`text-2xl text-purple-100 font-semibold mb-2`}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
export default HistoryBubble;
