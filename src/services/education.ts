import { Education } from "@type/index";
import apiService from "./fetchBaseQuery";

export const educationServices = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getEducations: builder.query<Education[], void>({
      query: () => ({
        url: "/educations",
      }),
      transformResponse: (result: { data: Education[] }) => result.data,
    }),
  }),
});

export const { useGetEducationsQuery } = educationServices;
