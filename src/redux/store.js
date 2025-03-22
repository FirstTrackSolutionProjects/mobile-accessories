import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice/cartslice";
import checkoutReducer from "./checkoutSlice/checkoutSlice"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer
  },
});