import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    searchResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = action.payload;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.searchResults = movieNames;
      state.gptMovies = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
