import React from "react";

const SkillCard = ({ item }) => {
  return (
    <div key={item.id} className="rounded-xl bg-stone-800 p-3 w-48">
      <img src={item.image} className="rounded-xl" />
      <p className="text-center mt-2">{item.name}</p>
    </div>
  );
};

export default SkillCard;
