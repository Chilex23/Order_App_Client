import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
  },
});

export const selectCount = (state) => state.counter.value;

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
