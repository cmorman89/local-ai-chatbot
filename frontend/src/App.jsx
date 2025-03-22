import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ModelSelectionMenu from "./components/ModelSelectionMenu";
import MainContentWindow from "./components/MainContentWindow";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Chat from "./pages/Chat";

function App() {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [model, setModel] = useState("gemma-3-12b-it");

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
          <Sidebar setModelIsOpen={setModelIsOpen} />
          <MainContentWindow>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat model={model} />} />
            </Routes>
          </MainContentWindow>
          <ModelSelectionMenu
            isOpen={modelIsOpen}
            setIsOpen={setModelIsOpen}
            setModel={setModel}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
