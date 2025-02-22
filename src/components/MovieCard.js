import React from "react";
import { IMG_CON_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-50 p-2 m-2">
      <img className="" src={IMG_CON_URL + posterPath} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
