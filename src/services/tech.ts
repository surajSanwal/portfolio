import { Technology } from "@type/index";
import apiService from "./fetchBaseQuery";

export const techServices = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getTechnologies: builder.query<Technology[], void>({
      query: () => ({
        url: "/projects",
      }),
      transformResponse: (result: { data: Technology[] }) => result.data,
    }),
  }),
});

export const { useGetTechnologiesQuery } = techServices;
