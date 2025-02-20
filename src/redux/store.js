import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cartSlice/cartSlice'

export default store = configureStore({
  reducer: {
    cart : CartReducer
  }
})
