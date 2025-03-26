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
            w-full max-w-3xl
            text-5xl lg:text-7xl font-bold font-inter
            animate animate-fade-up
            bg-gradient-to-br from-gray-800 to-violet-950
            bg-gray-200
            p-8 py-24 rounded-4xl
            shadow-lg shadow-black/10
            animate animate-grow animate-fade-up
            "
      >
        <Logo
          className={"lg:scale-150 mb-8 lg:mb-16 opacity-85 animate-fade-up"}
        />
        <div
          className="
            w-3/4
            mb-12
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
            font-normal  text-xl
            bg-violet-300
            w-fit
            px-8 py-4 mt-12 lg:mt-24 mb-12
            rounded-full
            shadow-lg shadow-black/20 hover:shadow-violet-950/50
            cursor-pointer
            animate animate-fade-up animate-grow
            "
          role="button"
          onClick={() => navigate("/chat")}
        >
          Chat Now <FontAwesomeIcon icon={faCaretRight} className="ml-3" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-2xlanimate animte-fade-up text-4xl mb-4">
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
            <FontAwesomeIcon icon={faHexagonNodes} className="text-4xl" />
            <span className="text-xs font-normal">Others</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
