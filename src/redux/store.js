import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import screenWidthReducer from "./features/screenWidth";
import cartReducer from "./features/cart";
import { apiSlice } from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    screenWidth: screenWidthReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
