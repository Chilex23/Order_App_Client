import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import screenWidthReducer from "./features/screenWidth";
import { foodSlice } from "./features/api/foodSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    screenWidth: screenWidthReducer,
    [foodSlice.reducerPath]: foodSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(foodSlice.middleware)
});

export default store;
