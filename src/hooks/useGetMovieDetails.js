import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesData } from "../utils/moviesSlice";
const useGetMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movies.moviesData);
  const index = movieData.findIndex((movie) => movie.id === movieId);
  const getmovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US'`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addMoviesData(json));
  };
  useEffect(() => {
    if (index == -1) {
      getmovieDetails();
    }
  }, [movieId]);
};

export default useGetMovieDetails;
