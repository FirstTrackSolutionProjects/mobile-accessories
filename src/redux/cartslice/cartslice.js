import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: localStorage.getItem('cart_items')?JSON.parse(localStorage.getItem('cart_items')) : [],
  totalItems: localStorage.getItem('cart_items')?JSON.parse(localStorage.getItem('cart_items')).reduce((sum, i) => sum + i.quantity, 0) : 0,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { item } = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

       // Update totalItems after adding
       state.totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
       localStorage.setItem('cart_items', JSON.stringify(state.items))
     },
 
     removeItem: (state, action) => {
       const { itemId } = action.payload;
       const existingItem = state.items.find((i) => i.id === itemId);
 
       if (existingItem) {
         if (existingItem.quantity > 1) {
           existingItem.quantity -= 1; // Decrement quantity
         } else {
           state.items = state.items.filter((item) => item.id !== itemId); // Remove item if quantity is 1
         }
        }

        // Update totalItems after removing
        state.totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
        console.log(state.items)
        localStorage.setItem('cart_items', JSON.stringify(state.items))
      },
    },
  });
  
  export const { addItem, removeItem } = cartslice.actions;
  export default cartslice.reducer;


