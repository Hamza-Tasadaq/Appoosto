import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/Cart.js";
import languageReducer from "./Slices/SelectedLanguage.js";
import OrdersStatusReducer from "./Slices/OrdersStatus.js";
import SelectedGridReducer from "./Slices/SelectedGrid.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    language: languageReducer,
    orderStatus: OrdersStatusReducer,
    grid: SelectedGridReducer,
  },
});
