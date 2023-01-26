import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  userToken: "",
  userFullName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser(state, action) {
      // (state.username = action.payload.username),
      //   (state.userFullName = action.payload.name)(
      //     (state.userToken = action.payload.token)
      //   );
      state.username = action.payload.username;
      state.userFullName = action.payload.name;
      state.userToken = action.payload.token;
    },
    logOutUser(state) {
      state.username = null;
      state.userToken = null;
    },
  },
});

export const selectToken = (state) => state.user.userToken;
export const selectUser = (state) => state.user.username;
export const selectUserFullName = (state) => state.user.userFullName;

export const { signInUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
