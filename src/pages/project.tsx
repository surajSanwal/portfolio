"use client";
import React from "react";
import { useRouter } from "next/router";

import ProjectDetail from "@components/homepage/projects/ProjectDetail";
import { useGetProjectByNameQuery } from "@services/projects";

const ProjectDetailPage = () => {
    const router = useRouter();
    const { name: projectName } = router.query;
    const { data: project, error, isLoading } = useGetProjectByNameQuery(projectName as string);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading project</p>;
    if (!project) return <p>Project not found!</p>;
  return (
    <>
      <ProjectDetail project={project} />
    </>
  );
};

export default ProjectDetailPage;
