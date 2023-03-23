
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = process.env.REACT_APP_AUCTION_URL;
console.log(baseUrl)

export const auctionDataApi = createApi({
  reducerPath: 'auctionDataApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => `7f02819f-8254-410a-b8af-ab98572bd26b`,
    }),
  }),
})

export const { useGetAllDataQuery } = auctionDataApi