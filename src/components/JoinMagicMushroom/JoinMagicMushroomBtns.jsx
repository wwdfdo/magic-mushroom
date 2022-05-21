import React from "react";
import RightArrow from "../Banner/RightArrow";
import Twitter from "../SocialMediaIcons/twitter";

const JoinMagicMushroomBtns = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="border-2 border-white py-3 px-10 rounded-lg">
        <button className="text-white text-lg font-bold">
          Twitter{" "}
          <span className="ml-4">
            <Twitter />
          </span>
        </button>
      </div>
      <div className="bg-blue-700 py-3 px-6 rounded-lg">
        <button className="text-white text-lg font-bold">
          Join Discord
          <span className="ml-3">
            <RightArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default JoinMagicMushroomBtns;
