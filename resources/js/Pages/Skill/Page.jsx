import SkillCard from "@/Components/Card/SkillCard";
import Each from "@/Components/Each";
import BaseLayout from "@/Layouts/BaseLayout";
import React from "react";
const ProjectPage = ({ skills }) => {
  console.log(skills);
  return (
    <BaseLayout title={"Skills"} heading={"Skills"}>
      <div className="flex flex-wrap gap-3">
        <Each
          of={skills.data.skills}
          render={(item) => (
            <SkillCard item={item} />
          )}
        />
      </div>
    </BaseLayout>
  );
};

export default ProjectPage;
