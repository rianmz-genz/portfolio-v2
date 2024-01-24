import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import Each from "@/Components/Each";
import CreateExperienceForm from "./Partials/CreateExperienceForm";
const CreateExperiencePage = ({ auth, createdData, experiences }) => {
  function createExperience(e) {
    e.preventDefault();
    router.post("/experiences", new FormData(e.target));
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Experience
        </h2>
      }
    >
      <Head title="Experience" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white lg:py-8">
          <CreateExperienceForm onCreateExperience={createExperience} />
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white lg:py-8">
          {/* <ExperienceTable skills={skills?.data?.skills ?? []} /> */}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default CreateExperiencePage;
