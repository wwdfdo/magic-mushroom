import React from "react";

const Facts = () => {
  return (
    <div className="flex justify-between w-4/6 mx-auto pb-20">
      <div className="flex gap-5 leading-loose">
        <div className="text-white text-5xl font-semibold">9,200</div>
        <div className="text-white text-[1.0625rem] font-semibold w-32">
          Unique Editions
        </div>
      </div>
      <div className="flex gap-5 leading-loose">
        <div className="text-white text-5xl font-semibold">140+</div>
        <div className="text-white text-[1.0625rem] font-semibold w-32">
          Mushroom Attributes
        </div>
      </div>
      <div className="flex gap-5 leading-loose">
        <div className="text-white text-5xl font-semibold">10,000+</div>
        <div className="text-white text-[1.0625rem] font-semibold w-[7rem]">
          Total Following
        </div>
      </div>
    </div>
  );
};

export default Facts;
