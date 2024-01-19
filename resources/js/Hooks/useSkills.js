import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const useSkills = () => {
  const [skills, setSkills] = useState([]);

  async function getSkills() {
    const response = await fetch("/skills/list");
    const { skills: data } = await response.json();
    setSkills(data);
  }

  useEffect(() => {
    getSkills();
  }, []);

  return { skills, getSkills };
};

export default useSkills;
