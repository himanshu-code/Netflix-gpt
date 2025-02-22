import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "language",
  initialState: {
    language: "en",
  },
  reducers: {
    toggleLanguageChange: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleLanguageChange } = configSlice.actions;
export default configSlice.reducer;
