import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://candles-backend.onrender.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;