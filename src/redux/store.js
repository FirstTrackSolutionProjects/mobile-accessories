// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './cartslice/cartslice'

// export default configureStore({
//   reducer: {
//     cart : cartReducer
//   }
// })

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice/cartslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
