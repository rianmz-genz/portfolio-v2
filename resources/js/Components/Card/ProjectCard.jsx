import React from "react";
import { BsCode, BsGlobe } from "react-icons/bs";
import Each from "../Each";

const ProjectCard = ({ item }) => {
  return (
    <article key={item.id} className="rounded-xl bg-stone-800">
      <img src={item.image} className="rounded-xl" />
      <div className="p-3">
        <div className="flex justify-between">
          <p className="font-bold text-lg">{item.name}</p>
          <div className="flex items-center justify-center gap-2">
            {item.repo_url && (
              <a
                href={item.repo_url}
                target="_blank"
                className="p-1 text-base bg-stone-700 rounded-xl"
              >
                <BsCode />
              </a>
            )}
            {item.demo_url && (
              <a
                href={item.demo_url}
                target="_blank"
                className="p-1 text-base bg-stone-700 rounded-xl"
              >
                <BsGlobe />
              </a>
            )}
          </div>
        </div>
        <p>{item.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <Each
            of={item.skills}
            render={(skill, index) => (
              <img key={index} className="w-12" src={skill.image} />
            )}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
