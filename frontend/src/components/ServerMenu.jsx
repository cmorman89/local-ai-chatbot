import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ServerMenu = ({
  serverUrl,
  setServerUrl,
  serverMenuOpen,
  setServerMenuOpen,
}) => {
  // Initialize data with type, server, and port
  const [data, setData] = useState({
    type: "http://",
    server: "localhost",
    port: "1234",
  });

  // Convert serverUrl to type, server, and port
  useEffect(() => {
    const [type, server, port] = serverUrl
      .match(/^(https?:\/\/)(.*?)(:\d+)?$/)
      .slice(1);
    setData({ type, server, port: port ? port.slice(1) : "" });
  }, [serverUrl]);

  // Update serverUrl with new data
  const handleUpdateServerUrl = () => {
    const { type, server, port } = data;
    const newServerUrl = `${type}${server}${port ? `:${port}` : ""}`;
    setServerUrl(newServerUrl);
    setServerMenuOpen(false);
  };

  const handleClose = () => {
    setServerMenuOpen(false);
  }

  return (
    <div
      className={`
        ${serverMenuOpen ? "flex" : "hidden"}
        h-screen w-screen
        bg-black/30
        pt-18
        fixed left-0 top-0 z-40
        backdrop-blur-sm
        animate
        `}
      onClick={handleClose}
    >
      <div
        className={`
            ${serverMenuOpen ? "flex" : "hidden"}
            items-center mb-2 pr-2
            fixed left-24 bottom-0 z-50
            w-4/5 max-w-105 lg:max-w-225
            shadow-lg shadow-black/10
            animate animate-grow
            `}
      >
        <div
          className=" 
            w-0 h-0
            border-t-[30px] border-t-transparent
            border-r-[30px] border-r-violet-700
            border-b-[30px] border-b-transparent
            "
        ></div>

        <div
          className="
            grid grid-cols-2 lg:grid-cols-10 w-full px-8 py-4 gap-3
            bg-violet-700
            rounded-2xl
            text-gray-100  font-inter
                "
        >
          <div className="flex flex-col col-span-2 gap-2">
            <label>Type</label>
            <select
              value={data.type}
              name="type"
              onChange={(e) => setData({ ...data, type: e.target.value })}
              className=" bg-gray-100 rounded-full px-4 py-2 text-gray-800"
            >
              <option value="http://">http://</option>
              <option value="https://">https://</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 col-span-2 lg:col-span-5">
            <label>Server IP/URL</label>
            <input
              type="text"
              value={data.server}
              name="server"
              onChange={(e) => setData({ ...data, server: e.target.value })}
              placeholder="localhost"
              className="bg-gray-100 rounded-full px-4 py-2 text-gray-800"
            />
          </div>
          <div className="flex flex-col gap-2 lg:col-span-2">
            <label>Port</label>
            <input
              type="number"
              value={data.port}
              name="port"
              placeholder="1234"
              onChange={(e) => setData({ ...data, port: e.target.value })}
              className="bg-gray-100 rounded-full px-4 py-2 text-gray-800"
            />
          </div>
          <div className="flex gap-2 justify-center">
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
            <div
              className="flex flex-col cursor-pointer h-full items-center justify-end"
              role="button"
              onClick={handleClose}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-gray-100 text-4xl hover:text-red-100 mb-0.5 animate animate-grow"
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-10 text-center italic text-red-200 ">
            <p className="text-sm">
              Warning: If using GitHub Pages, you must use https or
              localhost/127.0.0.1 as the server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServerMenu;
