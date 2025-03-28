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

function App() {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [serverMenuOpen, setServerMenuOpen] = useState(false);
  const [model, setModel] = useLocalStorage("modelId", null);
  const [serverUrl, setServerUrl] = useLocalStorage(
    "serverUrl",
    "http://localhost:1234"
  );

  return (
    <div
      className="
      flex flex-col
      bg-gray-100
      min-h-screen h-full
      min-w-screen w-full
      "
    >
      <Router>
        <Topbar model={model} setModelIsOpen={setModelIsOpen} />
        <div className="flex flex-row w-full h-full">
          <Sidebar
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
                element={<Chat model={model} serverUrl={serverUrl} />}
              />
            </Routes>
          </MainContentWindow>
          <ModelSelectionMenu
            isOpen={modelIsOpen}
            setIsOpen={setModelIsOpen}
            setModel={setModel}
            serverUrl={serverUrl}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
