import { router } from "@inertiajs/react";
import { FiTrash } from "react-icons/fi";

function SkillItem({ index, name, image, id, deleteData }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
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
export default SkillItem;
