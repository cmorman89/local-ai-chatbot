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
        p-8 pt-24
        "
    >
      <div
        className="
            flex flex-col items-center
            w-full
            text-7xl font-bold font-inter
            animate animate-fade-up
            bg-gradient-to-br from-transparent to-fuchsia-300/20
            bg-gray-200
            p-8 py-24 rounded-4xl
            shadow-lg shadow-black/10
            animate animate-grow animate-fade-up
            "
      >
        <div
          className="
            w-3/4
            bg-gradient-to-br from-violet-800 to-fuchsia-600
            bg-clip-text text-transparent
            animate animate-fade-up
              "
        >
          Connect to your local LLM with ease.
        </div>
        <div
          className="
            flex items-center justify-center
            font-normal  text-xl text-gray-200
            bg-gradient-to-br from-violet-700 to-violet-900
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
