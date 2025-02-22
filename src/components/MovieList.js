import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="text-white px-6 overflow-hidden">
        <h2 className="text-xl font-bold py-4">{title}</h2>
        <div className="flex  overflow-x-scroll ">
          <div className="flex ">
            {movies.map((movie) => (
              <MovieCard posterPath={movie.poster_path} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
