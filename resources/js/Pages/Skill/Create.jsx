import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import Each from "@/Components/Each";
import SkillTable from "./Partials/SkillTable";
import CreateSkillForm from "./Partials/CreateSkillForm";
const CreateSkillPage = ({ auth, createdData, skills }) => {
  console.log(skills);
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Skill
        </h2>
      }
    >
      <Head title="Skill" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white lg:py-8">
          <CreateSkillForm />
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white lg:py-8">
          <SkillTable skills={skills?.data?.skills ?? []} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default CreateSkillPage;
