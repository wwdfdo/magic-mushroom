import React from "react";
import ProjectSpecsCards from "./ProjectSpecsCards";
import ProjectSpecsSubTitle from "./ProjectSpecsSubTitle";
import ProjectSpecsTitle from "./ProjectSpecsTitle";

const ProjectSpecs = () => {
  return (
    <div className=" flex flex-col w-3/4 mx-auto bg-[#2e3034] rounded-2xl mt-10 py-20">
      <div>
        <ProjectSpecsSubTitle />
        <ProjectSpecsTitle />
        <ProjectSpecsCards />
      </div>
    </div>
  );
};

export default ProjectSpecs;
