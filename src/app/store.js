import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/Cart.js";
import languageReducer from "./Slices/SelectedLanguage.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    language: languageReducer,
  },
});
