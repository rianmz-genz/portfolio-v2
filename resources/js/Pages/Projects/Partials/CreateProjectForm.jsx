import React, { useRef, useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { router, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Each from "@/Components/Each";
import useSkills from "@/Hooks/useSkills";

const CreateProjectForm = ({ onSubmit }) => {
  const fields = ["name", "description", "repo_url", "demo_url"];
  const { skills } = useSkills();
  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <Each
          of={fields}
          render={(item, i) => (
            <div key={i}>
              <InputLabel htmlFor={item} value={item} />
              <TextInput
                id={item}
                className="mt-1 block w-full"
                required
                isFocused
                autoComplete={item}
                name={item}
              />
            </div>
          )}
        />
        <div>
          <p className="mb-2">Skills</p>
          <div className="flex flex-wrap gap-3">
            <Each
              of={skills}
              render={(skill, i) => (
                <div key={skill.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`skill-${skill.id}`}
                    name={`skills[${i}]`}
                    value={skill.id}
                    className="mr-1"
                  />
                  <label htmlFor={`skill-${skill.id}`}>{skill.name}</label>
                </div>
              )}
            />
          </div>
        </div>
        <div>
          <InputLabel htmlFor="image" value="Image" />
          <input
            id="image"
            className="mt-1 block w-full border-none shadow"
            required
            type="file"
            name="image"
          />
        </div>
      </div>
      <PrimaryButton>Create</PrimaryButton>
    </form>
  );
};

export default CreateProjectForm;
