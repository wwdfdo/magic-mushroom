import React from "react";
import { useState } from "react";
import story from "../../images/story.png";

const StoryImg = () => {
  const [storyImg, setStoryImg] = useState(story);

  return <img className="w-[500px] h-auto" src={storyImg} alt="" />;
};

export default StoryImg;
