import React from "react";
import BannerButtons from "./BannerButtons";
import BannerImage from "./BannerImage";
import BannerSubTitle from "./BannerSubTitle";
import BannerText from "./BannerText";
import BannerTitle from "./BannerTitle";

const Banner = () => {
  return (
    <div className="w-3/5 flex flex-col items-center mx-auto my-36 gap-8">
      <BannerTitle />
      <BannerText />
      <BannerSubTitle />
      <BannerButtons />
      <BannerImage />
    </div>
  );
};

export default Banner;
