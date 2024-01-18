import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import CreateProjectForm from "./Partials/CreateProjectForm";
import Each from "@/Components/Each";
import ProjectTable from "./Partials/ProjectTable";
const CreateProjectPage = ({ auth, createdData, projects }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Project
        </h2>
      }
    >
      <Head title="Project" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white lg:py-8">
          <CreateProjectForm />
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white lg:py-8">
          <ProjectTable projects={projects.data.projects} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default CreateProjectPage;
