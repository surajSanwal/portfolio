import { Experience } from "@type/index";
import apiService from "./fetchBaseQuery";

export const experienceServices = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getExperiences: builder.query<Experience[], void>({
      query: () => ({
        url: "/experiences",
      }),
      transformResponse: (result: { data: Experience[] }) => result.data,
    }),
  }),
});

export const { useGetExperiencesQuery } = experienceServices;
