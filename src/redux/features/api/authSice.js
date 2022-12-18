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
  }),
});

export const { useLoginUserMutation } = authSlice;
