import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * @description Create basing fetchBaseQuery using RTK-query
 * @returns base url and config
 * @public
 */
const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  cache: "reload",
  timeout: 60 * 1000,
  redirect: "error",
});

const QUERY_TAGS = {
  GET_EXPERIENCES: "GET_EXPERIENCES",
};

const apiService = createApi({
  baseQuery: baseQuery,
  reducerPath: "api",
  endpoints: () => ({}),
  tagTypes: Object.values(QUERY_TAGS),
  keepUnusedDataFor: 120,
});

export default apiService;
