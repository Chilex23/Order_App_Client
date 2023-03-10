import { createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { formatDate } from "../../../utils/formatDate";

export const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersForAdmin: builder.query({
      query: (orderBody) => ({
        url: `/orders?page=${orderBody.currentPage}`,
        headers: {
          Authorization: `Bearer ${orderBody.authToken}`,
        },
      }),
      providesTags: ["Orders"],
    }),
    createOrder: builder.mutation({
      query: (orderBody) => ({
        url: "/orders/create",
        method: "POST",
        headers: {
          Authorization: `Bearer ${orderBody.token}`,
        },
        body: { items: orderBody.items },
      }),
      invalidatesTags: ["Orders"],
    }),
    deliverOrder: builder.mutation({
      query: (orderBody) => ({
        url: `/orders/deliver/${orderBody.id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${orderBody.token}`,
        },
        body: { state: orderBody.state },
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

export const {
  useGetOrdersForAdminQuery,
  useCreateOrderMutation,
  useDeliverOrderMutation,
} = orderSlice;
