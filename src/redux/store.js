import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice/CartSlice'

const store = configureStore({
  reducer: {
    cart : CartSlice
  }
})
export default store