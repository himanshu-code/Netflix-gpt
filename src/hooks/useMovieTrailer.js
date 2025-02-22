import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailers = (movieId) => {
  const dispatch = useDispatch();
  const getmovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getmovieVideo();
  }, []);
};

export default useMovieTrailers;
