import Logo from "./Logo";

const Topbar = () => {
  return (
    <div
      className="
        flex items-center
        sticky top-0 z-50
        bg-violet-700
        w-full h-18
        px-8 py-4
        shadow-lg shadow-black/20
        "
    >
      <Logo />
    </div>
  );
};
export default Topbar;
