import React from "react";
import RightArrow from "../Banner/RightArrow";

const Roadmapbuttons = () => {
  return (
    <div className="flex flex-col gap-3 items-center w-1/2 mt-8">
      <button className="bg-blue-600 py-4 w-full text-white text-lg font-bold rounded-md ">
        Twitter{" "}
        <span className="ml-5">
          {" "}
          <RightArrow />
        </span>
      </button>

      <button className="py-4 w-full border-2 border-white text-white rounded-md">
        Join Discord
      </button>
    </div>
  );
};

export default Roadmapbuttons;
