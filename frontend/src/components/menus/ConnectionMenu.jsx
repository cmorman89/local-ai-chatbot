import {
  faCancel,
  faCheck,
  faHashtag,
  faPlug,
  faServer,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use, useEffect, useState } from "react";
import ConnnectionMenuItem from "./ConnnectionMenuItem";
import ExpandingButton from "../ExpandingButton";
import MessageBubble from "../MessageBubble";

const ConnectionMenu = ({ setServerUrl, serverUrl, setActiveMenu }) => {
  const [data, setData] = useState({
    protocol: "http://",
    hostname: "localhost",
    port: "1234",
  });
  const { protocol, hostname } = window.location;
  const [forceLocalhost, setForceLocalhost] = useState(false);
  const handleSetData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleUpdateServerUrl = () => {
    const { protocol, hostname, port } = data;
    const newServerUrl = `${protocol}${hostname}${port ? `:${port}` : ""}`;
    setServerUrl(newServerUrl);
    setActiveMenu(null);
  };

  // Convert serverUrl to type, server, and port
  useEffect(() => {
    const [protocol, hostname, port] = serverUrl
      .match(/^(https?:\/\/)(.*?)(:\d+)?$/)
      .slice(1);
    setData({
      protocol,
      hostname,
      port: port ? port.slice(1) : protocol === "https" ? "443" : "80",
    });
  }, [serverUrl]);
  // Check if browser will block http requests originating from https site
  useEffect(() => {
    if (protocol === "https:" && data.protocol === "http://") {
      setForceLocalhost(true);
    } else {
      setForceLocalhost(false);
    }
  }, [protocol, data.protocol]);

  return (
    <div
      className="
        flex flex-col items-center justify-center gap-y-4
        font-inter text-lg w-full"
    >
      <MessageBubble className="w-full">
        <div className="flex flex-col text-center">
          <span>Current server URL:</span>
          <span className="font-semibold text-xl">{serverUrl}</span>
        </div>
      </MessageBubble>
      <div></div>
      <ConnnectionMenuItem name="protocol" title="Protocol" icon={faPlug}>
        <select
          value={data.protocol}
          name="protocol"
          onChange={(e) => handleSetData(e)}
          className="bg-gray-100 rounded-full px-4 py-2 text-gray-800 w-full outline-none focus:outline-none"
        >
          <option value="http://">http://</option>
          <option value="https://">https://</option>
        </select>
      </ConnnectionMenuItem>
      <ConnnectionMenuItem name="hostname" title="Hostname" icon={faServer}>
        {forceLocalhost ? (
          <select
            value={data.hostname}
            name="hostname"
            onChange={(e) => handleSetData(e)}
            className="bg-gray-100 rounded-full px-4 py-2 text-gray-800 w-full outline-none focus:outline-none"
          >
            <option value="localhost">localhost</option>
            <option value="127.0.0.1">127.0.0.1</option>
          </select>
        ) : (
          <input
            type="text"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            value={data.hostname}
            name="hostname"
            onChange={(e) => handleSetData(e)}
            placeholder="localhost"
            className="bg-gray-100 rounded-full px-4 py-2 text-gray-800 w-full outline-none focus:outline-none"
          />
        )}
      </ConnnectionMenuItem>
      {forceLocalhost && (
        <MessageBubble type="error">
          <span className="font-semibold">Warning:</span> You cannot specify an
          external HTTP server{" "}
          {hostname === "github"
            ? "when visiting on GitHub Pages"
            : "if your current page is served over HTTPS."}
        </MessageBubble>
      )}
      <ConnnectionMenuItem name="port" title="Port" icon={faHashtag}>
        <input
          type="number"
          value={data.port}
          name="port"
          min={0}
          max={65535}
          placeholder="1234"
          onChange={(e) => handleSetData(e)}
          className="bg-gray-100 rounded-full px-4 py-2 text-gray-800 w-full outline-none focus:outline-none"
        />
      </ConnnectionMenuItem>
      <div className="flex gap-2 mt-4">
        <ExpandingButton
          variant="success"
          text={"Save Server"}
          onClick={handleUpdateServerUrl}
        >
          <FontAwesomeIcon icon={faCheck} />
        </ExpandingButton>
        <ExpandingButton
          variant="cancel"
          text={"Cancel"}
          onClick={() => setActiveMenu(false)}
        >
          <FontAwesomeIcon icon={faXmark} className="ml-0.5" />
        </ExpandingButton>
      </div>
    </div>
  );
};
export default ConnectionMenu;
