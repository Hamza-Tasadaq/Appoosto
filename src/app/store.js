import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/Cart.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
