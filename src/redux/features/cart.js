import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: {
      reducer(state, action) {
        const { name } = action.payload;
        const existingCartItem = state.cartItems.find(
          (cartItem) => cartItem.name === name
        );

        if (existingCartItem) {
          existingCartItem.quantity++
          return;
        }

        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      },
      prepare(name, price, id, imageLink) {
        return {
          payload: {
            id,
            name,
            price,
            imageLink
          },
        };
      },
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export default cartSlice.reducer;
