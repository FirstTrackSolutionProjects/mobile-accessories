import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    items:[],
  totalItems: 0,
};

const checkoutslice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutItems: (state, action) => {
      const  items  = action.payload;
      state.items = items;
      state.totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
    },

   clearCheckoutItems: (state, action) => {
    
      state.items = [];
      state.totalItems = 0;
     },

  
  },
});

export const {clearCheckoutItems,setCheckoutItems } = checkoutslice.actions;
export default checkoutslice.reducer;


