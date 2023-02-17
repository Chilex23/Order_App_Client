import { apiSlice } from "./apiSlice";

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userBody) => ({
        url: "/auth/login",
        method: "POST",
        body: userBody,
      }),
    }),
    signUpUser: builder.mutation({
      query: (userBody) => ({
        url: "/auth/signup",
        method: "POST",
        body: userBody,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useSignUpUserMutation } = authSlice;
