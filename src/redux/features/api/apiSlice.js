import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "@reduxjs/toolkit";

export const authHeaders = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYzFjMjFhYzZiMTdhNmRjMWNjNTgwMSIsInVzZXJuYW1lIjoiQ2hpbGV4MjQiLCJyb2xlIjoiQWRtaW4ifSwiaWF0IjoxNjczNjQyODYyLCJleHAiOjE2NzYyMzQ4NjJ9.13VQdVq_pc4bMGHx5vjfvCEVFWuFTEU1CIjF4WdyFn4",
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Food", "Orders", "Categories"],
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
      // invalidatesTags: (result, error, arg) => [{ type: "Food", id: arg.id }],
      invalidatesTags: ["Food"],
    }),
    getFoods: builder.query({
      query: () => ({
        url: "/food?page=1",
      }),
      providesTags: (result, error, arg) =>
        result.foodItems
          ? [
              ...result.foodItems.map(({ uuid }) => ({
                type: "Food",
                id: uuid,
              })),
              "Food",
            ]
          : ["Food"],
    }),
    getFood: builder.query({
      query: (foodId) => ({
        url: `/food/${foodId}`,
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/food/category/all",
      }),
      providesTags: ["Categories"],
    }),
    addCategory: builder.mutation({
      query: (category) => ({
        url: "/food/category/add",
        method: "POST",
        headers: authHeaders,
        body: category
      }),
      invalidatesTags: ["Categories"],
    }),
    getFoodByCategory: builder.query({
      query: ({category, page}) => ({
        url: `/food/category/${category}?page=${page}`
      })
    })
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
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useGetFoodByCategoryQuery
} = apiSlice;
