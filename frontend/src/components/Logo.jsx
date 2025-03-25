const Logo = ({ className }) => {
  return (
    <div className={`flex text-white/90 items-center cursor-default animate ${className}`}>
      <span className="font-serif font-light text-4xl italic mr-3">{"{"}</span>
      <span className="font-serif font-medium text-2xl italic mr-2 text-violet-200">
        prompt:
      </span>
      <span className="font-inter text-3xl mr-1">{"{"}</span>
      <span className="font-bold font-inter text-3xl mr-1">Bot</span>
      <span className="font-inter text-3xl mr-2">{"}"}</span>
      <span className="font-serif font-light text-4xl italic">{"}"}</span>
    </div>
  );
};
export default Logo;
