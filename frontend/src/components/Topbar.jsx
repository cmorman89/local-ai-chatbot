import Logo from "./Logo";
import ModelIndicator from "./ModelIndicator";

const Topbar = ({ model, setModelIsOpen }) => {
  return (
    <div
      className="
        flex items-center justify-between
        sticky top-0 z-50
        bg-violet-700
        w-full h-18
        px-8 py-4
        shadow-lg shadow-black/20
        "
    >
      <Logo />
      <ModelIndicator model={model} setModelIsOpen={setModelIsOpen} />
    </div>
  );
};
export default Topbar;
