import { Project } from "@type/project";
import apiService from "./fetchBaseQuery";

export const projectServices = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => ({
        url: "/projects",
      }),
      transformResponse: (result: { data: Project[] }) => result.data,
    }),
    
    getProjectByName: builder.query<Project | undefined, string>({
      queryFn: async (name, _queryApi, _extraOptions, baseQuery) => {
        const result = await baseQuery({ url: "/projects" });
        if (result.error) {
          return { error: result.error };
        }
        const projects: Project[] = (result.data as { data: Project[] }).data;
        console.log(projects);
        
        const project = projects.find((project) => project.name === name);
        return { data: project };
      },
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectByNameQuery } = projectServices;