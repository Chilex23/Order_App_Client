import { createSelector } from "@reduxjs/toolkit";
import { apiSlice, authHeaders } from "./apiSlice";

export const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersForAdmin: builder.query({
      query: () => ({
        url: "/orders/all?page=1",
        headers: authHeaders,
      }),
    }),
    createOrder: builder.mutation({
      query: (items) => ({
        url: "/orders/create",
        method: "POST",
        headers: authHeaders,
        body: {
          items,
        },
      }),
    }),
  }),
});

const emptyOrders = [];

export const selectOrdersResult =
  orderSlice.endpoints.getOrdersForAdmin.select();

export const selectOrdersData = createSelector(
  selectOrdersResult,
  (result) => result?.data ?? emptyOrders
);

export const { useGetOrdersForAdminQuery, useCreateOrderMutation } = orderSlice;
