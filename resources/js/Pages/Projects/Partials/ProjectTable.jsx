import Each from "@/Components/Each";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import React from "react";
import { FiTrash } from "react-icons/fi";

const ProjectTable = ({ projects }) => {
  console.log(projects);
  return (
    <table class="table-auto w-full">
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
            />
          )}
        />
      </tbody>
    </table>
  );
};

export default ProjectTable;

function ProjectItem({ index, name, description, image, id }) {
  function deleteData(id) {
    const isDelete = confirm("Yakin akan menghapus?");
    if (!isDelete) return;
    router.delete(route("project.delete", id));
  }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td className="w-48">
        <img className="w-48" src={image} />
      </td>
      <td className="w-24">
        <button
          onClick={() => deleteData(id)}
          className="px-4 py-2 bg-stone-900 text-white rounded-md cursor-pointer"
        >
          <FiTrash />
        </button>
      </td>
    </tr>
  );
}
