import React from "react";
import Instagram from "../SocialMediaIcons/instagram";
import Twitter from "../SocialMediaIcons/twitter";

const FooterSection = () => {
  return (
    <footer className="border-[#ffffff14] border-t-[1px]">
      <div className="w-3/4 mx-auto py-8 font-semibold flex justify-between">
        <div>
          <p className="text-white">
            © 2021 Copyright, All Rights Reserved to Magic Mushroom Clubhouse
          </p>
        </div>
        <div className="flex gap-5">
          <span className="text-white text-xl">
            <Twitter />
          </span>
          <span className="text-white text-xl">
            <Instagram />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
