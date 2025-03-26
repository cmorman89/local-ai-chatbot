import {
  faCircleXmark,
  faCoins,
  faHashtag,
  faList,
  faSliders,
  faThermometer,
  faThermometerHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
            className="cursor-pointer hover:text-red-100 animate animate-grow"
            onClick={handleClose}
            role="button"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faCircleXmark} className="text-2xl" />
          </div>
        </div>

        <div
          className="
            flex flex-col gap-4
            mb-7 p-8
            overflow-y-auto
            overflow-x-visible
          "
        >
          {systemPrompt &&
            systemPrompt.map((prompt, index) => (
              <div
                key={index}
                className="flex items-center justify-between font-inter animate animate-fade-up animate-grow
                ring-0 hover:ring-4 ring-violet-700 rounded-full px-2 py-1 bg-gray-50 shadow-lg shadow-black/20"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="">{prompt}</div>
                </div>
                <div
                  className="
                    flex items-center gap-4
                    text-2xl text-red-300 hover:text-red-500
                    cursor-pointer
                    animate animate-grow
                    "
                  onClick={() => handleRemovePrompt(index)}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SystemMenu;
