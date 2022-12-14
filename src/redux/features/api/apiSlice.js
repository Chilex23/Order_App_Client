import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "@reduxjs/toolkit";

export const authHeaders = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNGU5N2Q0OGYyN2I5N2ZhOTA1OGY1YiIsInVzZXJuYW1lIjoiQ2hpbGV4MjQiLCJyb2xlIjoiQWRtaW4ifSwiaWF0IjoxNjY5MjUxOTgxLCJleHAiOjE2NzE4NDM5ODF9.ts8NkN6KDhwGvbjffIWJCp7Dc2TTumd3ql_Uyk0_ANY",
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Food"],
  endpoints: (builder) => ({
    addNewFood: builder.mutation({
      query: (formData) => ({
        url: "/food/add",
        method: "POST",
        headers: authHeaders,
        // Include the entire food object as the body of the request
        body: formData,
      }),
      invalidatesTags: ["Food"],
    }),
    addReview: builder.mutation({
      query: (review) => ({
        url: `/food/reviews/add/${review.id}`,
        method: "POST",
        headers: authHeaders,
        body: {
          rating: review.rating,
          comment: review.comment,
        },
      }),
    }),
    getFoods: builder.query({
      query: () => ({
        url: "/food?page=1",
      }),
      providesTags: ["Food"],
    }),
    getFood: builder.query({
      query: (foodId) => ({
        url: `/food/${foodId}`,
      }),
    }),
  }),
});

const emptyFoodItems = [];

export const selectFoodItemsResult = apiSlice.endpoints.getFoods.select();

export const selectFoodItemsData = createSelector(
  selectFoodItemsResult,
  (result) => result?.data?.foodItems ?? emptyFoodItems
);

export const selectFoodItemsSortedByPrice = createSelector(
  selectFoodItemsData,
  (result) => {
    let resultCopy = result.slice();
    return resultCopy.sort((a, b) => b.price - a.price);
  }
);

export const selectFoodItemsSortedByTitle = createSelector(
  selectFoodItemsData,
  (result) => {
    let resultCopy = result.slice();
    return resultCopy.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
  }
);


export const {
  useAddNewFoodMutation,
  useAddReviewMutation,
  useGetFoodsQuery,
  useGetFoodQuery,
} = apiSlice;
