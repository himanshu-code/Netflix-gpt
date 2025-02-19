import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-8 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-6/12 py-6 text-lg ">{overview}</p>
      <div>
        <button className="bg-white text-black py-4 px-16  text-xl  hover:opacity-60 rounded-lg">
          ▶️ Play
        </button>
        <button className="mx-2 bg-white text-black py-4 px-16  text-xl  opacity-60 rounded-lg hover:opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
