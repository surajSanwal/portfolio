import { Experiences } from "../types";
import apiService from "./fetchBaseQuery";

export const experienceServices = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getExperiences: builder.query<Experiences[], void>({
      query: () => ({
        url: "/experiences",
      }),
      transformResponse: (result: { data: Experiences[] }) => result.data,
    }),
  }),
});

export const { useGetExperiencesQuery } = experienceServices;
