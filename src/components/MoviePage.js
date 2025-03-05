import React from "react";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { IMG_CON_URL } from "../utils/constants";
import AuthorizedHeader from "./AuthorizedHeader";
import VideoTitle from "./VideoTitle";

const MoviePage = () => {
  const { id } = useParams();

  useGetMovieDetails(id);
  const moviesData = useSelector((store) => store.movies.moviesData);
  let index = moviesData.findIndex((movie) => movie.id == id);
  const movieData = moviesData[index];
  return (
    <>
      <AuthorizedHeader />
      <>
        {index == -1 ? (
          <Loader />
        ) : (
          <>
            <img
              className="w-full h-screen object-cover fixed -z-10"
              src={IMG_CON_URL + movieData.backdrop_path}
              alt="movie poster"
            />
            <div className="">
              <VideoTitle
                title={movieData.original_title}
                overview={movieData.overview}
              />
            </div>
          </>
        )}
      </>
    </>
  );
};

export default MoviePage;
