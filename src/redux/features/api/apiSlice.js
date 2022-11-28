import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authHeaders = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNGU5N2Q0OGYyN2I5N2ZhOTA1OGY1YiIsInVzZXJuYW1lIjoiQ2hpbGV4MjQiLCJyb2xlIjoiQWRtaW4ifSwiaWF0IjoxNjY5MjUxOTgxLCJleHAiOjE2NzE4NDM5ODF9.ts8NkN6KDhwGvbjffIWJCp7Dc2TTumd3ql_Uyk0_ANY",
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    addNewFood: builder.mutation({
      query: (formData) => ({
        url: "/food/add",
        method: "POST",
        headers: authHeaders,
        // Include the entire food object as the body of the request
        body: formData,
      }),
    }),
    getFoods: builder.query({
      query: () => ({
        url: "/food?page=1",
        headers: authHeaders
      }),
    }),
  }),
});

export const {
  useAddNewFoodMutation,
  useGetFoodsQuery,
} = apiSlice;
