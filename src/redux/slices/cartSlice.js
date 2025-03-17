import { createSlice } from "@reduxjs/toolkit";

const CART = "cart-Items";
const cartInitialValue = JSON.parse(localStorage.getItem(CART)) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialValue,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state.splice(index, 1);
    },
    decreaseFromCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem.quantity === 1) {
        return state.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});
