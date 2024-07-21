import { Projects } from "../types";
import apiService from "./fetchBaseQuery";

export const projectServices = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<Projects[], void>({
      query: () => ({
        url: "/projects",
      }),
      transformResponse: (result: { data: Projects[] }) => result.data,
    }),
  }),
});

export const { useGetProjectsQuery } = projectServices;
