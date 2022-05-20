import React from "react";
import BgImageSection from "../Bg-Image-Section/BgImageSection";
import Facts from "../Facts/Facts";
import Mint from "../Mint/mint";
import Friendliest from "../Friendliest/Friendliest";
import Story from "../Story/Story";
import Roadmap from "../Roadmap/Roadmap";

const Body = () => {
  return (
    <div className="bg-[#212428]">
      <BgImageSection />
      <Facts />
      <Mint />
      <Friendliest />
      <Story />
      <Roadmap />
    </div>
  );
};

export default Body;
