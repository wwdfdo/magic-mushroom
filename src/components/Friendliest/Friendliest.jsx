import React from "react";
import RightArrow from "../Banner/RightArrow";
import FriendliestImg from "./FriendliestImg";

const Friendliest = () => {
  return (
    <div className="flex justify-around w-5/6 mx-auto mt-32">
      <div className="w-1/3 flex flex-col gap-8 mt-16">
        <div>
          <h2 className="text-white text-4xl font-bold leading-snug">
            The Friendliest Troop on the Ethereum Blockchain
          </h2>
        </div>
        <div>
          <p className="text-white text-[21px] leading-[36px] ">
            Spawning a community of eternal wisdom. A sense of oneness
            flourishing everywhere in our discord. The Magic Mushroom Clubhouse
            is a collection of 9,200 AI-generated collectibles exploring the
            Ethereum Blockchain.
          </p>
        </div>
        <div>
          <button className="bg-blue-600 py-3 px-8 text-white font-semibold text-lg rounded-md">
            Join Discord
            <span className="ml-2">
              <RightArrow />
            </span>
          </button>
        </div>
      </div>
      <FriendliestImg />
    </div>
  );
};

export default Friendliest;
