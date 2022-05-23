import React, { useState } from "react";
import { specs } from "../../arrays/projectSpecsArray";

const ProjectSpecsCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {specs.map((item) => (
        <div
          key={item.id}
          className="w-2/5 border-[4px] border-white last:border-blue-600 first:border-blue-600 p-5 rounded-3xl"
        >
          <p className="text-white text-2xl font-semibold leading-loose">
            {item.title}
          </p>
          <div className="text-white text-[1.0625rem] font-semibold pr-20 leading-relaxed">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSpecsCards;
