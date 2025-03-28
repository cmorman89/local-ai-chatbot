import {
  faCircleXmark,
  faPlus,
  faSliders,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageBubble from "./MessageBubble";

const SystemMenu = ({ isOpen, setIsOpen, systemPrompt, setSystemPrompt }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRemovePrompt = (index) => {
    setSystemPrompt((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddPrompt = () => {
    setSystemPrompt((prev) => [...prev, ""]);
  };

  const handlePromptChange = (e, index) => {
    const newPrompts = [...systemPrompt];
    newPrompts[index] = e.target.value;
    setSystemPrompt(newPrompts);
  };

  const handleClearAll = () => {
    setSystemPrompt([]);
  }

  return (
    <div
      className={`
        ${isOpen ? "flex" : "hidden"}
        h-screen w-screen
        bg-black/30
        pt-18
        fixed left-0 top-0 z-40
        backdrop-blur-sm
        animate
        `}
      onClick={(e) => handleOutsideClick(e)}
    >
      <div
        className="
          flex flex-col
          bg-gray-200
          max-h-4/5 w-2/3 max-w-250
          m-auto
          rounded-2xl
          shadow-xl shadow-black/20"
      >
        <div
          className="
            flex items-center justify-evenly
            bg-violet-700
            text-white
            font-medium font-inter text-2xl
            rounded-t-2xl shadow-lg shadow-black/20
            py-3 px-8
            "
        >
          <div className="flex flex-grow items-center justify-center gap-4">
            <FontAwesomeIcon
              icon={faSliders}
              className="font-normal text-violet-200 text-2xl"
            />
            System Prompt
          </div>
          <div
            className="cursor-pointer hover:text-rose-100 animate animate-grow"
            onClick={handleClose}
            role="button"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faCircleXmark} className="text-2xl" />
          </div>
        </div>

        <div
          className="
            flex flex-col gap-4 items-center justify-center
            mb-7 p-8
            overflow-y-auto
            overflow-x-visible
          "
        >
          <MessageBubble type="info">
            To edit a prompt, simply click and type. Changes are saved automatically.
          </MessageBubble>
          {systemPrompt &&
            systemPrompt.map((prompt, index) => (
              <div
                key={index}
                className="flex items-center justify-between font-inter animate animate-fade-up w-full
                ring-0 hover:ring-4 ring-violet-700 rounded-xl px-6 bg-gray-50 shadow-lg shadow-black/20
                animate animate-grow"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="flex items-center gap-4 w-full py-4">
                  <input
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none focus:font-mono focus:text-sm"
                    type="text"
                    placeholder="Enter a prompt"
                    value={prompt}
                    onChange={(e) => handlePromptChange(e, index)}
                  />
                </div>
                <div
                  className="
                    flex items-center gap-4
                    text-4xl text-rose-300 hover:text-rose-500
                    cursor-pointer
                    animate animate-grow
                    "
                  onClick={() => handleRemovePrompt(index)}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </div>
              </div>
            ))}
          <div className="flex items-center justify-center w-full gap-4">
            <div
              className="
              flex items-center justify-center gap-2
              text- text-violet-100 font-inter
              bg-violet-700
              rounded-full
              py-4 px-8 mt-4
              cursor-pointer
              animate animate-grow animate-fade-up
              shadow-xl shadow-black/20
              "
              role="button"
              aria-label="Add New Prompt"
              onClick={handleAddPrompt}
            >
              <FontAwesomeIcon icon={faPlus} className="text-xl" />
              Add a New Prompt
            </div>
            <div
              className="
              flex items-center justify-center gap-2
              text- text-violet-100 font-inter
              bg-rose-700
              rounded-full
              py-4 px-8 mt-4
              cursor-pointer
              animate animate-grow animate-fade-up
              shadow-xl shadow-black/20
              "
              role="button"
              aria-label="Clear All Prompts"
              onClick={handleClearAll}
            >
              <FontAwesomeIcon icon={faTrash} className="text-xl" />
              Clear All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SystemMenu;
