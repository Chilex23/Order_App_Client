import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "@reduxjs/toolkit";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://order-app-service.onrender.com/api" }),
  tagTypes: ["Food", "Orders", "Categories"],
  endpoints: (builder) => ({
    addNewFood: builder.mutation({
      query: (foodBody) => ({
        url: "/food/add",
        method: "POST",
        headers: {
          Authorization: `Bearer ${foodBody.token}`,
        },
        // Include the entire food object as the body of the request
        body: foodBody.formData,
      }),
      invalidatesTags: ["Food"],
    }),
    addReview: builder.mutation({
      query: (review) => ({
        url: `/food/reviews/add/${review.id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${review.token}`,
        },
        body: {
          rating: review.rating,
          comment: review.comment,
        },
      }),
      invalidatesTags: ["Food"],
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
      providesTags: ["Food"],
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
        headers: {
          Authorization: `Bearer ${category.token}`,
        },
        body: {
          type: category.type,
        },
      }),
      invalidatesTags: ["Categories"],
    }),
    getFoodByCategory: builder.query({
      query: ({ category, page }) => ({
        url: `/food/category/${category}?page=${page}`,
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
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useGetFoodByCategoryQuery,
} = apiSlice;
