import {
  faCircleCheck,
  faCircleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ServerMenu = ({
  serverUrl,
  setServerUrl,
  serverMenuOpen,
  setServerMenuOpen,
}) => {
  const [data, setData] = useState({
    type: "https://",
    server: "localhost/v1/",
    port: "1234",
  });

  const handleUpdateServerUrl = () => {
    const { type, server, port } = data;
    const newServerUrl = `${type}${server}${port ? `:${port}` : ""}`;
    setServerUrl(newServerUrl);
    setServerMenuOpen(false);
  };
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
            grid grid-cols-10 w-full p-8 gap-3
            bg-violet-700
            rounded-2xl
            text-gray-100  font-inter
                "
      >
        <div className="flex flex-col col-span-2 gap-2 w-full">
          <label>Type</label>
          <select
            value={data.type}
            name="type"
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className="bg-gray-100 rounded-full px-4 py-2 text-gray-800"
          >
            <option value="http://">http://</option>
            <option value="https://">https://</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 col-span-5 w-full">
          <label>Server IP/URL</label>
          <input
            type="text"
            value={data.server}
            name="server"
            onChange={(e) => setData({ ...data, server: e.target.value })}
            placeholder="localhost/v1/"
            className="bg-gray-100 rounded-full px-4 py-2 text-gray-800"
          />
        </div>
        <div className="flex flex-col gap-2 col-span-2 w-full">
          <label>Port</label>
          <input
            type="number"
            value={data.port}
            name="port"
            onChange={(e) => setData({ ...data, port: e.target.value })}
            placeholder="Optional"
            className="bg-gray-100 rounded-full px-4 py-2 text-gray-800"
          />
        </div>
        <div
          className="flex flex-col cursor-pointer h-full items-center justify-end"
          role="button"
          onClick={() => handleUpdateServerUrl()}
        >
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-gray-100 text-4xl hover:text-green-300 mb-0.5 animate animate-grow"
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
          className="text-gray-100 m-4 text-2xl  hover:text-red-200 animate animate-grow"
        />
      </div>
    </div>
  );
};
export default ServerMenu;
