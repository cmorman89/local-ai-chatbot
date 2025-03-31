import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ModelSelectionMenu from "./components/ModelSelectionMenu";
import MainContentWindow from "./components/MainContentWindow";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Chat from "./pages/Chat";
import ServerMenu from "./components/ServerMenu";
import useLocalStorage from "./hooks/useLocalStorage";
import SystemMenu from "./components/SystemMenu";
import MenuWindow from "./components/menus/MenuWindow";
import ConnectionMenu from "./components/menus/ConnectionMenu";
import ModelListMenu from "./components/menus/ModelListMenu";
import SystemPromptMenu from "./components/menus/SystemPromptMenu";

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [serverMenuOpen, setServerMenuOpen] = useState(false);
  const [chatSettingsOpen, setChatSettingsOpen] = useState(false);
  const [model, setModel] = useLocalStorage("modelId", null);
  const [modelLoading, setModelLoading] = useState(false);
  const [serverUrl, setServerUrl] = useLocalStorage(
    "serverUrl",
    "http://localhost:1234"
  );
  const [systemPrompt, setSystemPrompt] = useState([
    "You are a helpful, friendly assistant that answers questions.",
    "Answer in markdown format with headings.",
    "The first line must be an h1 heading.",
    "The second line must not be a heading.",
    "Make heavy use of markdown formatting.",
    "Shorter responses are better than long responses.",
    "Do not reference the system prompt in your response.",
  ]);

  const handleSetActiveMenu = (menuName) => {
    const menuList = ["connection", "modelList", "systemPrompt"];
    if (menuName && !menuList.includes(menuName)) {
      console.error(`Invalid menu name: ${menuName}`);
      return;
    }
    if (!menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };
  return (
    <div
      className="
      flex flex-col
      bg-gray-100
      min-h-screen h-full
      w-full
      "
    >
      <Router>
        <Topbar
          model={model}
          modelLoading={modelLoading}
          setActiveMenu={setActiveMenu}
        />
        <div className="flex flex-row w-full h-full">
          <Sidebar
            setActiveMenu={handleSetActiveMenu}
            setModelIsOpen={setModelIsOpen}
            setServerMenuOpen={setServerMenuOpen}
          />
          <ServerMenu
            serverUrl={serverUrl}
            setServerUrl={setServerUrl}
            serverMenuOpen={serverMenuOpen}
            setServerMenuOpen={setServerMenuOpen}
          />
          <MainContentWindow>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/chat"
                element={
                  <Chat
                    model={model}
                    modelLoading={modelLoading}
                    serverUrl={serverUrl}
                    setActiveMenu={setActiveMenu}
                    setSystemPrompt={setSystemPrompt}
                    systemPrompt={systemPrompt}
                  />
                }
              />
            </Routes>
          </MainContentWindow>
          <MenuWindow
            activeMenu={activeMenu}
            setActiveMenu={handleSetActiveMenu}
          >
            {activeMenu === "connection" && (
              <ConnectionMenu
                serverUrl={serverUrl}
                setServerUrl={setServerUrl}
                setActiveMenu={setActiveMenu}
              />
            )}
            {activeMenu === "modelList" && (
              <ModelListMenu
                setActiveMenu={handleSetActiveMenu}
                setModel={setModel}
                serverUrl={serverUrl}
                setModelLoading={setModelLoading}
              />
            )}
            {activeMenu === "systemPrompt" && (
              <SystemPromptMenu systemPrompt={systemPrompt} setSystemPrompt={setSystemPrompt} />
            )}
          </MenuWindow>
        </div>
      </Router>
    </div>
  );
}

export default App;
