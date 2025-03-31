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
          setModelIsOpen={setModelIsOpen}
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
                    setModelSelectionOpen={setModelIsOpen}
                    chatSettingsOpen={chatSettingsOpen}
                    setChatSettingsOpen={setChatSettingsOpen}
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
              <ModelSelectionMenu
                isOpen={modelIsOpen}
                setIsOpen={setModelIsOpen}
                setModel={setModel}
                serverUrl={serverUrl}
                setModelLoading={setModelLoading}
              />
            )}
            {activeMenu === "systemPrompt" && (
              <SystemMenu
                isOpen={chatSettingsOpen}
                setIsOpen={setChatSettingsOpen}
                systemPrompt={[]}
                setSystemPrompt={() => {}}
              />
            )}
          </MenuWindow>
          <ModelSelectionMenu
            isOpen={modelIsOpen}
            setIsOpen={setModelIsOpen}
            setModel={setModel}
            serverUrl={serverUrl}
            setModelLoading={setModelLoading}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
