// it will contain all the APIs related to SJF

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mainUrl } from "../../baseConfig";
import { sjfUrls } from "../sjf/urls/sjfUrls";

export const sjfApi = createApi({
  reducerPath: "sjfApi",
  baseQuery: fetchBaseQuery({ baseUrl: mainUrl }),
  tagTypes: ["SJF"],
  endpoints: (builder) => ({
    getSjfData: builder.query({
      query: () => ({
        url: sjfUrls.sjf.v1.listV1(),
        method: "GET",
      }),
      providesTags: ["SJF"],
    }),

    // Other endpoints go here
  }),
});

export const { useGetSjfDataQuery } = sjfApi;
