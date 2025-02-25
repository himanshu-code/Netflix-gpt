import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieResults from "./GptMovieResults";
import { BG_IMG_URL } from "../utils/constants.js";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BG_IMG_URL}
          alt="bg"
        ></img>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieResults />
      </div>
    </>
  );
};

export default GptSearch;
