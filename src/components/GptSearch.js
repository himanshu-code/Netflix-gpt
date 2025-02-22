import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieResults from "./GptMovieResults";
import { BG_IMG_URL } from "../utils/constants.js";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img className="w-full" src={BG_IMG_URL} alt="bg"></img>
      </div>
      <GptSearchBar />
      <GptMovieResults />
    </div>
  );
};

export default GptSearch;
