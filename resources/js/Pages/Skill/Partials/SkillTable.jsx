import Each from "@/Components/Each";
import React from "react";
import SkillItem from "./SkillItem";
import { router } from "@inertiajs/react";
const SkillTable = ({ skills }) => {
  function deleteData(id) {
    const isDelete = confirm("Yakin akan menghapus?");
    if (!isDelete) return;
    router.delete(route("skill.delete", id));
  }
  return (
    <table className="table-auto w-full">
      <thead className="bg-black text-white">
        <tr>
          <th className="w-8">#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <Each
          of={skills}
          render={(item, index) => (
            <SkillItem
              deleteData={deleteData}
              key={index}
              index={index}
              name={item.name}
              image={item.image}
              id={item.id}
            />
          )}
        />
      </tbody>
    </table>
  );
};

export default SkillTable;
