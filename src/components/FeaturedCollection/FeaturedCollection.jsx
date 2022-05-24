import React from "react";
import RightArrow from "../Banner/RightArrow";
// import shroom1 from "../../images/shroom1.jpg";
// import shroom2 from "../../images/shroom2.jpg";
// import shroom3 from "../../images/shroom3.jpg";
// import shroom4 from "../../images/shroom4.jpg";
// import shroom5 from "../../images/shroom5.jpg";
import { featuredCollectionArray } from "../../arrays/featuredCollectionArray";
import LeftArrow from "../ArrowIcons/LeftArrow";

const FeaturedCollection = () => {
  return (
    <div className="flex flex-col w-3/4 mx-auto">
      <div className="flex justify-between w-full">
        <div className="w-1/3">
          <h2 className="text-white font-semibold text-xl">
            Featured Collection
          </h2>
          <p className="text-white text-lg">
            The Magic Mushroom Clubhouse is a collection of 9,200 uniquely
            generated NFTs who were transported through the magic forest into
            the blockchain.
          </p>
        </div>
        <div className="flex items-end gap-6">
          <span className="text-white text-4xl">
            <LeftArrow />
          </span>
          <span className="text-white text-4xl">
            <RightArrow />
          </span>
        </div>
      </div>
      <div className="flex overflow-hidden w-full">
        {featuredCollectionArray.map((item) => (
          <img className="w-1/4 h-auto" src={item.img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollection;
