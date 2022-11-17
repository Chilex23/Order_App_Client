import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: window.innerWidth,
};

const screenWidthSlice = createSlice({
  name: "screenWidth",
  initialState,
  reducers: {
    setWidth(state, action) {
      state.width = action.payload;
    },
  },
});

export const selectWidth = (state) => state.screenWidth.width;

export const { setWidth } = screenWidthSlice.actions;

export default screenWidthSlice.reducer;
