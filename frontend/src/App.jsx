import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Topbar from "./components/Topbar";
import ChatHistoryFlyout from "./components/ChatHistoryFlyout";
import MainContentWindow from "./components/MainContentWindow";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
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
        <Topbar />
        <div className="flex flex-row w-full h-full">
          <Sidebar />
          <MainContentWindow>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<ChatBox />} />
            </Routes>
          </MainContentWindow>
          <ChatHistoryFlyout />
        </div>
      </Router>
    </div>
  );
}

export default App;
