import React from "react";
import { IMG_CON_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return null;
  }
  return (
    <div className="w-36 md:w-38 p-2 m-2">
      <img className="" src={IMG_CON_URL + posterPath} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
