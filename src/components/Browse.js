import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import GptSearch from "./GptSearch";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector, useDispatch } from "react-redux";
import AuthorizedHeader from "./AuthorizedHeader";
import { toggleGptSearchView } from "../utils/gptSlice";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useEffect(() => {
    dispatch(toggleGptSearchView(false));
  }, []);
  return (
    <div>
      <AuthorizedHeader />
      <MainContainer />
      <SecondContainer />
    </div>
  );
};

export default Browse;
