import React from "react";
import StoryImg from "./StoryImg";
import StoryPara from "./StoryPara";

const Story = () => {
  return (
    <div className="flex mx-auto justify-around w-5/6 mt-32">
      <StoryPara />
      <StoryImg />
    </div>
  );
};

export default Story;
