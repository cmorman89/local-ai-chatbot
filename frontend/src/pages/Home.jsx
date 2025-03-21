import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="
        flex flex-col 
        items-center
        w-full h-full
        p-24 pt-24
        "
    >
      <div
        className="
            flex flex-col items-center
            w-full max-w-3xl
            text-7xl font-bold font-inter
            animate animate-fade-up
            bg-gradient-to-br from-gray-800 to-violet-950
            bg-gray-200
            p-8 py-24 rounded-4xl
            shadow-lg shadow-black/10
            animate animate-grow animate-fade-up
            "
      >
        <div
          className="
            w-3/4
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
            px-8 py-4 mt-24
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
      </div>
    </div>
  );
};

export default Home;
