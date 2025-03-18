import ChatBubble from "./components/ChatBubble";
import Sidebar from "./components/Sidebar";

import ChatBox from "./components/ChatBox";
import Topbar from "./components/Topbar";
import ChatInput from "./components/ChatInput";
import ChatHistoryFlyout from "./components/ChatHistoryFlyout";
import MainContentWindow from "./components/MainContentWindow";

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
            <ChatBubble isUser={true} title="">
              What is the history of Lorem Ipsum?
            </ChatBubble>
            <ChatBubble title="Origins in Classical Latin">
              The origins of Lorem Ipsum can be traced back to classical Latin
              literature. It is derived from De finibus bonorum et malorum ("On
              the Ends of Good and Evil"), a philosophical work by the Roman
              statesman and philosopher Cicero, written in 45 BCE. The passage
              used in modern typesetting is taken from sections discussing
              hedonism and ethics. However, over time, the text has been
              altered, with certain words and phrases removed or modified to
              create a nonsensical but aesthetically pleasing block of text.
            </ChatBubble>
            <ChatBubble title="Printing and Early Use in Typography">
              The modern use of Lorem Ipsum in typesetting and design dates back
              to the 16th century. Printers seeking a way to test typography and
              layout without the distraction of meaningful content began using
              scrambled Latin text. This allowed them to focus on the visual
              aspects of typesetting, such as spacing, font styles, and
              alignment, without being influenced by readable words.
            </ChatBubble>
            <ChatBubble title="The Digital Revolution and Modern Adoption">
              With the rise of digital publishing and graphic design software in
              the late 20th century, Lorem Ipsum became a standard placeholder
              text in the industry. In the 1980s, software like Aldus PageMaker
              popularized its use, including it as a default filler text. Since
              then, it has been widely adopted by designers, web developers, and
              publishers as a convenient tool for mockups and prototypes.
            </ChatBubble>
            <ChatBubble title="Continued Use Today">
              Today, Lorem Ipsum remains a ubiquitous part of design and
              publishing. It is used in everything from website development to
              book layouts and app design. While some alternatives, such as
              random English words or AI-generated filler text, have emerged,
              Lorem Ipsum continues to be the preferred choice due to its
              neutral, visually balanced structure that closely resembles
              natural language without being distracting.
            </ChatBubble>
            <ChatBubble isUser={true} title="">
              What is the history of Lorem Ipsum?
            </ChatBubble>
            <ChatBubble title="Origins in Classical Latin">
              The origins of Lorem Ipsum can be traced back to classical Latin
              literature. It is derived from De finibus bonorum et malorum ("On
              the Ends of Good and Evil"), a philosophical work by the Roman
              statesman and philosopher Cicero, written in 45 BCE. The passage
              used in modern typesetting is taken from sections discussing
              hedonism and ethics. However, over time, the text has been
              altered, with certain words and phrases removed or modified to
              create a nonsensical but aesthetically pleasing block of text.
            </ChatBubble>
            <ChatBubble title="Printing and Early Use in Typography">
              The modern use of Lorem Ipsum in typesetting and design dates back
              to the 16th century. Printers seeking a way to test typography and
              layout without the distraction of meaningful content began using
              scrambled Latin text. This allowed them to focus on the visual
              aspects of typesetting, such as spacing, font styles, and
              alignment, without being influenced by readable words.
            </ChatBubble>
            <ChatBubble title="The Digital Revolution and Modern Adoption">
              With the rise of digital publishing and graphic design software in
              the late 20th century, Lorem Ipsum became a standard placeholder
              text in the industry. In the 1980s, software like Aldus PageMaker
              popularized its use, including it as a default filler text. Since
              then, it has been widely adopted by designers, web developers, and
              publishers as a convenient tool for mockups and prototypes.
            </ChatBubble>
            <ChatBubble title="Continued Use Today">
              Today, Lorem Ipsum remains a ubiquitous part of design and
              publishing. It is used in everything from website development to
              book layouts and app design. While some alternatives, such as
              random English words or AI-generated filler text, have emerged,
              Lorem Ipsum continues to be the preferred choice due to its
              neutral, visually balanced structure that closely resembles
              natural language without being distracting.
            </ChatBubble>
          </ChatBox>
        </MainContentWindow>
        <ChatInput />
        <ChatHistoryFlyout />
      </div>
    </div>
  );
}

export default App;
