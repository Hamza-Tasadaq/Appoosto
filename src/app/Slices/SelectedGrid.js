import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOption: "",
};

export const GridSlice = createSlice({
  name: "selectedOption",
  initialState,
  reducers: {
    changeOption: (state, actions) => {
      state.selectedOption = actions.payload;
    },
  },
});

export const { changeOption } = GridSlice.actions;

export default GridSlice.reducer;
