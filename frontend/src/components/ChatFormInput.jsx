import { useEffect, useRef } from "react";

const ChatFormInput = ({
  value,
  onChange,
  onSubmit,
  inputSize,
  setInputSize,
  isActive,
  setIsFocused,
  loading,
  darkMode,
}) => {
  const textareaRef = useRef(null);
  const MAX_LINES = 5;

  // Recalculate the input size whenever the value changes
  useEffect(() => {
    const textarea = textareaRef.current;
    // Reset the input size if the value is empty
    if (value === "") {
      setInputSize(1);
      return;
    }
    if (textarea) {
      textarea.style.height = "auto";
      const lineHeight = parseInt(
        window.getComputedStyle(textarea).lineHeight,
        10
      );

      const lines = Math.floor(textarea.scrollHeight / lineHeight);
      // Limit the number of lines to MAX_LINES
      const clampedLines = Math.min(lines, MAX_LINES);
      // Set the input size based on the number of lines
      setInputSize(clampedLines);
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
        ${darkMode ? "bg-gray-800" : "bg-white"}
        ${inputSize === 1 ? "items-center" : ""}
        w-full lg:w-2/3 xl:w-1/2 max-w-256
        px-4 py-2
        ${inputSize === 1 ? "rounded-full" : "rounded-lg"}
        ring ring-violet-300/50 focus-within:ring-violet-700
        shadow-black/20
        ${
          isActive
            ? "border-violet-700 border-2 shadow-xl"
            : "border-violet-300/50 border-1 shadow-md"
        }
        animate animate-fade-up
        `}
      style={{ height: `${inputSize * 24}px`, minHeight: "56px" }}
    >
      <textarea
        ref={textareaRef}
        disabled={loading}
        className={`
            w-full
            ${darkMode ? "text-gray-200" : "text-gray-800 "}
            font-inter
            placeholder-gray-500
            text-sm
            outline-none
            resize-none
            overflow-y-auto
            animate
            ${loading ? "cursor-not-allowed" : "cursor-text"}
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
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </div>
  );
};

export default ChatFormInput;
