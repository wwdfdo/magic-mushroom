import React from "react";

const ScoutStrip = () => {
  return (
    <div className="flex bg-blue-600 justify-center items-center gap-10 py-20 mt-10">
      <div>
        <h2 className="text-white text-[2rem] font-bold">
          Shroom Scouts Adventure In-Progress
        </h2>
      </div>
      <div>
        <button className="text-lg font-semibold bg-white py-3 px-10 rounded-md">
          Mint Now
        </button>
      </div>
    </div>
  );
};

export default ScoutStrip;
