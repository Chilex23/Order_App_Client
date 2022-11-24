import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodSlice = createApi({
  reducerPath: "food",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/food" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    addNewFood: builder.mutation({
      query: (formData) => ({
        url: "/add",
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNGU5N2Q0OGYyN2I5N2ZhOTA1OGY1YiIsInVzZXJuYW1lIjoiQ2hpbGV4MjQiLCJyb2xlIjoiQWRtaW4ifSwiaWF0IjoxNjY5MjUxOTgxLCJleHAiOjE2NzE4NDM5ODF9.ts8NkN6KDhwGvbjffIWJCp7Dc2TTumd3ql_Uyk0_ANY",
        },
        // Include the entire food object as the body of the request
        body: formData,
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useAddNewFoodMutation } = foodSlice;
