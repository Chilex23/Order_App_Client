import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import screenWidthReducer from "./features/screenWidth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    screenWidth: screenWidthReducer
  },
});

export default store;
