import React from "react";
import JoinMagicMushroomBtns from "./JoinMagicMushroomBtns";
import JoinMagicMushroomTitle from "./JoinMagicMushroomTitle";

const JoinMagicMushroom = () => {
  return (
    <div className="flex justify-between w-3/4 mx-auto pb-16">
      <JoinMagicMushroomTitle />
      <JoinMagicMushroomBtns />
    </div>
  );
};

export default JoinMagicMushroom;
