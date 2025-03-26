import { faCircleXmark, faCoins, faHashtag, faList, faSliders, faThermometer, faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SystemMenu = ({ isOpen, setIsOpen, systemPrompt, setSystemPrompt }) => {

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
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
            Chat Settings
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
          <div>
            <FontAwesomeIcon icon={faList} className="text-4xl" /> System Prompt:</div>
          <div>
            <FontAwesomeIcon icon={faThermometerHalf} className="text-4xl"/>
            Temperature: 
            <input type="range" />
          </div>
          <div>
            <FontAwesomeIcon icon={faHashtag} className="text-4xl" />
            Max Tokens: </div>
        </div>
      </div>
    </div>
  );
};
export default SystemMenu;
