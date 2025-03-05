import React, { useEffect, useState } from "react";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { IMG_CON_URL } from "../utils/constants";
import AuthorizedHeader from "./AuthorizedHeader";
import VideoTitle from "./VideoTitle";
import MovieList from "./MovieList";
import useMovieTrailers from "../hooks/useMovieTrailer";
import VideoBackground from "./VideoBackground";
import useGetSimilarMovieDetails from "../hooks/useGetRelatedMovies";
const MoviePage = () => {
  let id = useParams().id;
  console.log("param id" + id);
  useGetMovieDetails(id);
  useGetSimilarMovieDetails(id);
  const movies = useSelector((store) => store.movies);
  console.log("movies" + JSON.stringify(movies));
  const moviesData = useSelector((store) => store.movies.moviesData);
  let index = moviesData.findIndex((movie) => movie.id == id);
  console.log("Movieindex" + index);
  const movieData = moviesData[index];
  useEffect(() => {
    // setId(useParams().id);
  }, []);
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
              <VideoBackground movieId={id} />
            </div>
            <div>
              <MovieList title="Similar" movies={movies.similarMovies} />
            </div>
          </>
        )}
      </>
    </>
  );
};

export default MoviePage;
