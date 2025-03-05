import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSimilarMovies } from "../utils/moviesSlice";
const useGetSimilarMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  //   const movieData = useSelector((store) => store.movies.moviesData);
  //   const index = movieData.findIndex((movie) => movie.id === movieId);
  const getSimilarMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1'`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log("similarMovies" + JSON.stringify(json));
    dispatch(addSimilarMovies(JSON.parse(JSON.stringify(json.results))));
  };
  useEffect(() => {
    // if (index == -1) {
    getSimilarMovieDetails();
    // }
  }, [movieId]);
};

export default useGetSimilarMovieDetails;
