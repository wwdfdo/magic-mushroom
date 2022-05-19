import React from "react";
import { useState } from "react";
import nft3 from "../../images/nft3.png";

const FriendliestImg = () => {
  const [img, setImg] = useState(nft3);

  return <img className="w-[600px] h-auto" src={img} alt="" />;
};

export default FriendliestImg;
