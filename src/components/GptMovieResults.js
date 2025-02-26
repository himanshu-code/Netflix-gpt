import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieResults = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, searchResults } = gpt;
  if (!searchResults) {
    return null;
  }

  return (
    <div className="text-white p-4 m-4 bg-black opacity-90">
      {searchResults.map((movieName, index) => (
        <>
          {gptMovies[index] && (
            <MovieList
              key={movieName}
              title={movieName}
              movies={gptMovies[index]}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default GptMovieResults;
