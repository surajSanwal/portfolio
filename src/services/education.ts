import { Educations } from "../types";
import apiService from "./fetchBaseQuery";

export const educationServices = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getEducations: builder.query<Educations[], void>({
      query: () => ({
        url: "/educations",
      }),
      transformResponse: (result: { data: Educations[] }) => result.data,
    }),
  }),
});

export const { useGetEducationsQuery } = educationServices;
