import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  userToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser(state, action) {
      (state.username = action.payload.username), (state.userToken = action.payload.token);
    },
  },
});

export const selectToken = (state) => state.user.userToken;
export const selectUser = (state) => state.user.username;

export const { signInUser } = userSlice.actions;

export default userSlice.reducer;
