import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.name === action.payload.name
      );

      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.name === action.payload.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return;
      }

      state.cartItems = [
        ...state.cartItems,
        { ...action.payload, quantity: 1 },
      ];
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
