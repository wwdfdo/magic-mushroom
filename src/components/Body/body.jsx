import React from "react";
import BgImageSection from "../Bg-Image-Section/BgImageSection";
import Facts from "../Facts/Facts";
import Mint from "../Mint/mint";
import Friendliest from "../Friendliest/Friendliest";
import Story from "../Story/Story";
import Roadmap from "../Roadmap/Roadmap";
import FeaturedCollection from "../FeaturedCollection/FeaturedCollection";
import ProjectSpecs from "../ProjectSpecs/ProjectSpecs";
import ScoutStrip from "../ScoutStrip/ScoutStrip";
import TeamMembersSection from "../TeamMembersSection/TeamMembersSection";
import JoinMagicMushroom from "../JoinMagicMushroom/JoinMagicMushroom";
import FooterSection from "../FooterSection/FooterSection";
import QuestionSection from "../Questions/QuestionSection";

const Body = () => {
  return (
    <div className="bg-[#212428]">
      <BgImageSection />
      <Facts />
      <Mint />
      <Friendliest />
      <Story />
      <Roadmap />
      <ProjectSpecs />
      <ScoutStrip />
      <QuestionSection />
      <TeamMembersSection />
      <JoinMagicMushroom />
      <FooterSection />
    </div>
  );
};

export default Body;
