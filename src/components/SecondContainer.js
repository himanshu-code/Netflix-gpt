import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  const browseList = [
    { title: "Now Playing", data: movies.nowPlayingMovies },
    { title: "Top rated", data: movies.topRatedMovies },
    { title: "Popular", data: movies.popularMovies },
    { title: "Upcoming Movies", data: movies.upcomingMovies },
  ];
  return (
    <div className="">
      {browseList.map((item) => (
        <div className="mt-0  pl-4 md:pl-12 relative  bg-black md:first:-mt-52">
          {item.data && <MovieList title={item.title} movies={item.data} />}
        </div>
      ))}
    </div>
  );
};

export default SecondContainer;
