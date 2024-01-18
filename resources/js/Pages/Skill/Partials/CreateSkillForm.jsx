import React, { useRef, useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { router, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Each from "@/Components/Each";

const CreateSkillForm = () => {
  function submit(e) {
    e.preventDefault();
    router.post("/skills", new FormData(e.target));
  }
  const fields = ["name"];
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

export default CreateSkillForm;
