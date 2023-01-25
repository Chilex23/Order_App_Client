import { createSelector } from "@reduxjs/toolkit";
import { apiSlice, authHeaders } from "./apiSlice";
import { formatDate } from "../../../utils/formatDate";

export const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersForAdmin: builder.query({
      query: () => ({
        url: "/orders/all?page=1",
        headers: authHeaders,
      }),
      providesTags: ["Orders"],
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
      invalidatesTags: ["Orders"],
    }),
  }),
});

const emptyOrders = [];

export const selectOrdersResult =
  orderSlice.endpoints.getOrdersForAdmin.select();

export const selectOrdersData = createSelector(
  selectOrdersResult,
  (result) => result?.data?.orders ?? emptyOrders
);

export const selectOrdersSortedByAmount = createSelector(
  selectOrdersData,
  (result) => {
    let resultCopy = result.slice();
    return resultCopy.sort((a, b) => b.total_price - a.total_price);
  }
);

export const selectOrdersSortedByDate = createSelector(
  selectOrdersData,
  (result) => {
    let resultCopy = result.slice();
    return resultCopy.sort((a, b) => b.order_date - a.order_date);
  }
);

export const selectOrdersForCharts = createSelector(
  selectOrdersData,
  (result) =>
    result.map(({ order_date, total_price }) => ({
      name: formatDate(order_date),
      amount: total_price,
    }))
);

export const { useGetOrdersForAdminQuery, useCreateOrderMutation } = orderSlice;
