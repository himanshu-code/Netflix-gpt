import React, { useEffect, useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieResults from "./GptMovieResults";
import { BG_IMG_URL } from "../utils/constants.js";
import Loader from "./Loader.js";
import AuthorizedHeader from "./AuthorizedHeader.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { useDispatch } from "react-redux";
const GptSearch = () => {
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const searchClick = (value) => {
    setShowLoader(value);
  };
  useEffect(() => {
    dispatch(toggleGptSearchView(true));
  }, []);
  return (
    <>
      <AuthorizedHeader />
      <div className="fixed -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BG_IMG_URL}
          alt="bg"
        ></img>
      </div>
      <div className="">
        <GptSearchBar onSearchClick={searchClick} />
        {showLoader && <Loader />}
        <GptMovieResults />
      </div>
    </>
  );
};

export default GptSearch;
