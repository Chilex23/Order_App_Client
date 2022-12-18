import { configureStore } from "@reduxjs/toolkit";
import screenWidthReducer from "./features/screenWidth";
import cartReducer from "./features/cart";
import userReducer from "./features/user";
import { apiSlice } from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    screenWidth: screenWidthReducer,
    cart: cartReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
