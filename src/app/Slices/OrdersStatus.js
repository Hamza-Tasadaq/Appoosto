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
    clearOrderStatus: (state) => {
      state.orderStatus = [];
    },
  },
});

export const { addOrder, clearOrderStatus } = orderStatusSlice.actions;

export default orderStatusSlice.reducer;
