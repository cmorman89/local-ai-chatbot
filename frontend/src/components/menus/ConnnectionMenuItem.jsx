import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConnnectionMenuItem = ({ name, icon, title, children }) => {
  return (
    <div
      className="
        flex flex-grow items-center justify-between gap-1 sm:gap-2
        p-1.5 sm:p-2 sm:pl-4 md:pl-6 
        bg-violet-700
        text-gray-100 text-sm sm:text-base md:text-lg font-inter
        h-16 w-full
        rounded-xl shadow-lg shadow-black/20
        animate animate-fade-up animate-grow
        "
    >
      <div className="flex gap-1 sm:gap-2 md:gap-4 items-center min-w-1/4">
        <FontAwesomeIcon icon={icon} className="text-base sm:text-lg md:text-2xl" />
        <label htmlFor={name}>{title}</label>
      </div>
      <div
        className="
            flex items-center flex-grow
            bg-gray-100
            h-full
            px-4
            rounded-lg
            text-sm sm:text-base md:text-lg font-inter
        "
      >
        {children}
      </div>
    </div>
  );
};
export default ConnnectionMenuItem;
