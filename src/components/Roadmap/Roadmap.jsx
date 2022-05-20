import React from "react";
import Roadmapbuttons from "./RoadmapButtons";
import RoadmapCard from "./RoadmapCard";
import RoadmapTitle from "./RoadmapTitle";
import { createCards } from "../../arrays/cardsArray";
import { useState } from "react";

const Roadmap = () => {
  const [cards, setCards] = useState(createCards);
  return (
    <div className="flex flex-col w-3/4 mx-auto items-center py-20 bg-[#2e3034] mt-36 rounded-3xl">
      <RoadmapTitle />
      <RoadmapCard cards={cards} />
      <Roadmapbuttons />
    </div>
  );
};

export default Roadmap;
