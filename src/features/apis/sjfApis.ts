// it will contain all the APIs related to SJF

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mainUrl } from "../../baseConfig";
import { sjfUrls } from "../sjf/urls/sjfUrls";

export const sjfApi = createApi({
  reducerPath: "sjfApi",
  baseQuery: fetchBaseQuery({
    baseUrl: mainUrl,
    prepareHeaders: (headers, { getState }) => {
      // TODO: Here we can add the token to the headers if we have any token
      // in the state or in the local storage or in the cookies
    },
  }),
  tagTypes: ["SJF"],
  endpoints: (builder) => ({
    getSJFList: builder.query({
      query: (data: any) => ({
        url: sjfUrls.sjf.v1.listV1(),
        method: "GET",
        params: data,
      }),
      providesTags: ["SJF"],
      transformResponse(data, meta) {
        return {
          data,
          totalCount: Number(meta?.response?.headers.get("X-Total-Count")),
        };
      },
    }),
    // Other endpoints go here
  }),
});

export const { useGetSJFListQuery } = sjfApi;

//  list of apis
//  LIST: http://localhost:8080/api/sjf/v1?_start=0&_end=10&sort=_id&order=DESC
//  GET: http://localhost:8080/api/sjf/v1/668af841c6b87ebc65fe2587
//  CREATE: http://localhost:8080/api/sjf/v1
// {
//     "name":"job3",
//     "duration":34 // in seconds
// }
//  DELETE: http://localhost:8080/api/sjf/v1/66929d1bfecee40164ae658e

// ws by id: ws://localhost:8080/api/sjf/v1/ws/66929e25fecee40164ae6590

// Got this 2 way to make the list api call
// 1.
// getSJFList: builder.query({
//       query: (data: any) => ({
//         url: sjfUrls.sjf.v1.listV1(),
//         method: "GET",
//         params: data,
//   }),
//   providesTags: ["SJF"],
// }),

// 2.
// getSJFList: builder.query({
//       query: (data: any) => ({
//         url: sjfUrls.sjf.v1.listV1(),
//         `${data ? "?" : ""}` +
//         `${data?._start ? `&_start=${data?._start}` : ""}` +
//         `${data?._end ? `&_end=${data?._end}` : ""}` +
//         `${data?.sort ? `&sort=${data?.sort}` : ""}` +
//         `${data?.order ? `&order=${data?.order}` : ""}` +
//         `${data?.search ? `&search=${data?.search}` : ""}` +
//         `${data?.status ? `&status=${data?.status}` : ""}`,
//         method: "GET",
//   }),
//   providesTags: ["SJF"],
// }),
