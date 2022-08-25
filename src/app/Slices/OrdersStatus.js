import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderStatus: [],
};
export const orderStatusSlice = createSlice({
  name: "orderStatus",
  initialState,
  reducers: {
    addOrder: (state, actions) => {
      state.orderStatus = [...state.orderStatus, ...[...actions.payload]];
    },
  },
});

export const { addOrder } = orderStatusSlice.actions;

export default orderStatusSlice.reducer;
