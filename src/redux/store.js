import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import screenWidthReducer from "./features/screenWidth";
import cartReducer from "./features/cart";
import userReducer from "./features/user";
import { apiSlice } from "./features/api/apiSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  screenWidth: screenWidthReducer,
  cart: cartReducer,
  user: userReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);