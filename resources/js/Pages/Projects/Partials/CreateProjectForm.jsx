import React, { useRef, useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { router, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Each from "@/Components/Each";

const CreateProjectForm = () => {
  const fields = ["name", "description", "repo_url", "demo_url"];
  function submit(e) {
    e.preventDefault();
    router.post("/projects", new FormData(e.target));
  }

  return (
    <form onSubmit={submit}>
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
