import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailers = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.trailerVideo);
  const index = movieTrailer.findIndex((movie) => movie.id === movieId);
  console.log("tarilerIndex" + index);
  const getmovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo({ id: movieId, trailer: trailer }));
  };
  useEffect(() => {
    if (index == -1) {
      getmovieVideo();
    }
  }, []);
};

export default useMovieTrailers;
