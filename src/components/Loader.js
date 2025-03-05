const Loader = () => {
  return (
    <div className="absolute top-0 bg-black  flex items-center justify-center w-full h-screen opacity-75">
      <div
        className="w-16 h-16 border-4 border-blue-500
                        border-t-transparent rounded-full 
                        animate-spin"
      ></div>
    </div>
  );
};

export default Loader;
