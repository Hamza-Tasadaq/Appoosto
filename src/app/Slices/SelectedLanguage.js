import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLanguage: {
    flagSrc: "italian",
    text: "Italian",
  },
};

export const languageSlice = createSlice({
  name: "selectedLanguage",
  initialState,
  reducers: {
    changeLanguage: (state, actions) => {
      state.selectedLanguage = actions.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
