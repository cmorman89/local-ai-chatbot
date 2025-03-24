import { faCircleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServerMenu = ({ serverUrl, setServerUrl, serverMenuOpen, setServerMenuOpen }) => {
  return (
    <div
          className={`
            ${serverMenuOpen ? "flex" : "hidden"}
            items-end
            mb-2
            fixed left-24 bottom-0 z-50
            w-full max-w-175
            shadow-lg shadow-black/10
            animate animate-grow
            `}
    >
      <div
        className=" 
            w-0 h-0 mb-6
            border-t-[30px] border-t-transparent
            border-r-[50px] border-r-violet-700
            border-b-[30px] border-b-transparent
                    "
      ></div>

      <div
        className="
            grid grid-cols-6 w-full p-8 gap-3
            bg-violet-700
            rounded-2xl
            text-gray-100  font-inter
                "
      >
        <div className="flex flex-col gap-2 w-full">
          <label>Type</label>
          <input
            type="text"
            placeholder="https://"
            className="bg-gray-100 rounded-full px-4 py-2 text-gray-800"
          />
        </div>
        <div className="flex flex-col gap-2 col-span-3 w-full">
          <label>Server IP/URL</label>
          <input
            type="text"
            placeholder="localhost"
            className="bg-gray-100 rounded-full px-4 py-2 text-gray-800"
          />
        </div>
        <div className="flex flex-col gap-2 col-span-2 w-full">
          <label>Port</label>
          <input
            type="number"
            placeholder="Optional"
            className="bg-gray-100 rounded-full px-4 py-2 text-gray-800"
          />
        </div>
      </div>
      <div
        className="absolute right-0 top-0 cursor-pointer"
        role="button"
        onClick={() => setServerMenuOpen(false)}
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="text-gray-100 m-4 text-2xl"
        />
      </div>
    </div>
  );
};
export default ServerMenu;
