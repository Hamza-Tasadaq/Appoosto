import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(({ id }) => id !== action.payload);
    },
    updateCount: (state, action) => {
      const { id, newCount, newPrice } = action.payload;
      // Finding the index to update cart value
      const index = state.cart?.findIndex((cartItem) => cartItem.id === id);
      // Selecting the Item which have to update
      const selectedItem = state.cart[index];
      // Updating the selected Item
      selectedItem.count = newCount;
      selectedItem.price = newPrice;
      // Updating the cart Array
      state.cart[index] = selectedItem;
      // Re intializing the cart
      state.cart = [...state.cart];
    },
  },
});

export const { addItem, removeItem, updateCount } = cartSlice.actions;

export default cartSlice.reducer;
