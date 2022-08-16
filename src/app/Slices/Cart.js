import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 1,
      imgSrc: "steak",
      title: "Organic Steak",
      desc: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus leo sapien…",
      price: 12,
    },
    {
      id: 2,
      imgSrc: "steak",
      title: "Organic Steak",
      desc: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus leo sapien…",
      price: 13,
    },
    {
      id: 3,
      imgSrc: "steak",
      title: "Organic Steak",
      desc: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus leo sapien…",
      price: 14,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state) => {
      state.value += 1;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
