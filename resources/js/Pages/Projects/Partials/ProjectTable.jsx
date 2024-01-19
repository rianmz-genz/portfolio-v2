import Each from "@/Components/Each";
import React from "react";
import ProjectItem from "./ProjectItem";
import { router } from "@inertiajs/react";

const ProjectTable = ({ projects }) => {
  function deleteData(id) {
    const isDelete = confirm("Yakin akan menghapus?");
    if (!isDelete) return;
    router.delete(route("project.delete", id));
  }

  return (
    <table className="table-auto w-full">
      <thead className="bg-black text-white">
        <tr>
          <th className="w-8">#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <Each
          of={projects}
          render={(item, index) => (
            <ProjectItem
              key={index}
              index={index}
              name={item.name}
              description={item.description}
              image={item.image}
              id={item.id}
              deleteData={deleteData}
            />
          )}
        />
      </tbody>
    </table>
  );
};

export default ProjectTable;
