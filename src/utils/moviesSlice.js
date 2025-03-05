import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: [],
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    moviesData: [],
    similarMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo.push(action.payload);
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMoviesData: (state, action) => {
      //   if (state.moviesData.length > 10) {
      //     state.moviesData.splice(0, 1);
      //   }
      state.moviesData.push(action.payload);
    },
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMoviesData,
  addSimilarMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
