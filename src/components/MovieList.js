import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="text-white px-6 overflow-hidden">
        <h2 className="text-lg md:text-3xl font-bold py-4">{title}</h2>
        <div className="flex  overflow-x-scroll ">
          <div className="flex ">
            {movies.map((movie) => (
              <Link to={"/movies/" + movie.id} key={movie.id}>
                <MovieCard posterPath={movie.poster_path} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
