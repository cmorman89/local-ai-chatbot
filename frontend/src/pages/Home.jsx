import {
  faCaretRight,
  faHexagonNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import {
  DeepSeek,
  Gemma,
  Mistral,
  Meta,
  Microsoft,
  Qwen,
  Claude,
  LmStudio,
  Groq,
} from "@lobehub/icons";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="
        flex flex-col 
        items-center
        w-full h-full
        p-4 lg:p-24 pt-24
        "
    >
      <div
        className="
            flex flex-col items-center
            text-5xl lg:text-7xl font-bold font-inter
            animate animate-fade-up
            bg-gradient-to-br from-gray-800 to-violet-950
            bg-gray-200
            p-8 pt-16
            rounded-4xl
            shadow-lg shadow-violet-900/50
            animate animate-fade-up
            "
      >
        <Logo
          className={"lg:scale-150 mb-8 lg:mb-16 opacity-85 animate-fade-up"}
        />
        <div
          className="
            w-3/4
            mb-4
            bg-gradient-to-tl from-violet-600 to-fuchsia-500 
            bg-clip-text text-transparent
            animate animate-fade-up
              "
        >
          Connect to your local LLM with ease.
        </div>
        <div
          className="
            flex items-center justify-center
            font-normal  text-xl text-gray-800
            bg-violet-300
            w-fit
            px-6 py-3 mt-12  mb-12
            rounded-full
            shadow-lg shadow-black/20 hover:shadow-fuchsia-500/50
            cursor-pointer
            animate animate-fade-up animate-grow
            "
          role="button"
          onClick={() => navigate("/chat")}
        >
          Chat Now <FontAwesomeIcon icon={faCaretRight} className="ml-3" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-2xl animate animate-fade-up lg:text-4xl mb-4">
          Works with:
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-2xl animate animate-fade-up lg:text-4xl mb-4">
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <LmStudio />
            <span className="text-xs font-normal">LM Studio</span>
          </div>
          <div className="border-r border-white/20 h-12"></div>
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <Claude />
            <span className="text-xs font-normal">Claude</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <DeepSeek />
            <span className="text-xs font-normal">DeepSeek</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <Gemma />
            <span className="text-xs font-normal">Gemma</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <Groq />
            <span className="text-xs font-normal">Groq</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <Meta />
            <span className="text-xs font-normal">Llama</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <Mistral />
            <span className="text-xs font-normal">Mistral</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <Microsoft />
            <span className="text-xs font-normal">Phi</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <Qwen />
            <span className="text-xs font-normal">Qwen</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate animate-grow">
            <FontAwesomeIcon icon={faHexagonNodes} />
            <span className="text-xs font-normal">Others</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
