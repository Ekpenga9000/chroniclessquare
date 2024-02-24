const PopularTags = () => {
  return (
    <div className="flex justify-center">
      <div className="container-custom mt-4 flex items-center gap-2">
        <h2 className="text-white/60 text-sm">Popular Tags:</h2>
        <ul className="flex flex-wrap items-center gap-4">
          <li className="text-white/50 hover:text-white/70 text-xs backdrop-blur-lg cursor-pointer">
            Next-MySql configuration
          </li>
          <li className="text-white/50 hover:text-white/70 text-xs backdrop-blur-lg cursor-pointer">
            React-Redux
          </li>
          <li className="text-white/50 hover:text-white/70  text-xs backdrop-blur-lg cursor-pointer">
            TypeScript
          </li>
          <li className="text-white/50 hover:text-white/70  text-xs backdrop-blur-lg cursor-pointer">
            React-Query
          </li>
          <li className="text-white/50 hover:text-white/70  text-xs backdrop-blur-lg cursor-pointer">
            Next-Auth
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopularTags;
