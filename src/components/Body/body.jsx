import React from "react";
import BgImageSection from "../Bg-Image-Section/BgImageSection";
import Facts from "../Facts/Facts";
import Mint from "../Mint/mint";
import Friendliest from "../Friendliest/Friendliest";

const Body = () => {
  return (
    <div className="bg-[#212428]">
      <BgImageSection />
      <Facts />
      <Mint />
      <Friendliest />
    </div>
  );
};

export default Body;
