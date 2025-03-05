import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailers from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  const trailerVideos = useSelector((store) => store.movies?.trailerVideo);
  const index = trailerVideos.findIndex((video) => video.id === movieId);
  const trailerVideo = index !== -1 ? trailerVideos[index].trailer : null;
  useMovieTrailers(movieId);
  return (
    <div>
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
