import React from "react";
import { BsCode, BsGlobe } from "react-icons/bs";

const ProjectCard = ({ item }) => {
  return (
    <article key={item.id} className="rounded-xl bg-stone-800">
      <img src={item.image} className="rounded-xl" />
      <div className="p-3">
        <div className="flex justify-between">
          <p className="font-bold text-lg">{item.name}</p>
          <div className="flex items-center justify-center gap-2">
            <a
              href={item.repo_url}
              target="_blank"
              className="p-1 text-base bg-stone-700 rounded-xl"
            >
              <BsCode />
            </a>
            <a
              href={item.demo_url}
              target="_blank"
              className="p-1 text-base bg-stone-700 rounded-xl"
            >
              <BsGlobe />
            </a>
          </div>
        </div>
        <p>{item.description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;