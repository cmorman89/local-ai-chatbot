import { useEffect } from "react";

const ChatFormInput = ({
  value,
  onChange,
  onSubmit,
  inputSize,
  setInputSize,
}) => {
  useEffect(() => {
    if (value) {
      const rows = value.split("\n").length;
      setInputSize(rows < 5 ? rows : 5);
    } else {
      setInputSize(1);
    }
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };
  return (
    <div
      className={`
        flex justify-center
        bg-white
        ${inputSize === 1 ? "items-center" : ""}
        w-full lg:w-2/3 xl:w-1/2 max-w-256
        px-4 py-2
        ${inputSize === 1 ? "rounded-full" : "rounded-lg"}
        ring ring-violet-300/50 focus-within:ring-violet-700
        shadow-md shadow-black/20
        animate animate-fade-up
        `}
      style={{ height: `${inputSize * 24}px`, minHeight: "56px" }}
    >
      <textarea
        className={`
            w-full
            text-gray-800
            font-inter
            text-sm
            outline-none
            resize-none
            overflow-y-auto
            animate
        `}
        placeholder="Type your message here..."
        value={value}
        onChange={(e) => onChange(e)}
        onKeyDown={handleKeyDown}
        rows={inputSize}
        autoFocus
        autoComplete="off"
        autoCorrect="on"
        aria-autocomplete="none"
        name="userPrompt"
        style={{ height: `${inputSize * 20}px` }}
      />
    </div>
  );
};

export default ChatFormInput;
