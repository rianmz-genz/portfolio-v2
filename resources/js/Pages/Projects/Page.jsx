import ProjectCard from "@/Components/Card/ProjectCard";
import Each from "@/Components/Each";
import BaseLayout from "@/Layouts/BaseLayout";
import React from "react";
import { BsCode, BsGlobe } from "react-icons/bs";
const ProjectPage = ({ projects }) => {
  return (
    <BaseLayout title={"Projects"} heading={"Projects"}>
      <div className="grid grid-cols-2 gap-3">
        <Each
          of={projects.data.projects}
          render={(item) => <ProjectCard item={item} />}
        />
      </div>
    </BaseLayout>
  );
};

export default ProjectPage;
