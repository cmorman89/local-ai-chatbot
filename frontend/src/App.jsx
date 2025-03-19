import ChatBubble from "./components/ChatBubble";
import Sidebar from "./components/Sidebar";

import ChatBox from "./components/ChatBox";
import Topbar from "./components/Topbar";
import ChatInput from "./components/ChatInput";
import ChatHistoryFlyout from "./components/ChatHistoryFlyout";
import MainContentWindow from "./components/MainContentWindow";
import ChatComponent from "./components/ChatComponent";

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
      <Topbar />
      <div className="flex flex-row w-full h-full">
        <Sidebar />
        <MainContentWindow>
          <ChatBox>
            <ChatComponent url="http://192.168.0.162:1234"/>
          </ChatBox>
        </MainContentWindow>
        <ChatHistoryFlyout />
      </div>
    </div>
  );
}

export default App;
