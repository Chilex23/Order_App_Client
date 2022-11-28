import { apiSlice, authHeaders } from "./apiSlice";

export const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersForAdmin: builder.query({
      query: () => ({
        url: "/orders/all?page=1",
        headers: authHeaders,
      }),
    }),
  }),
});

export const { useGetOrdersForAdminQuery } = orderSlice;
