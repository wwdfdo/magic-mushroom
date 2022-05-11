import React from "react";
import NavMenu from "../NavMenu";
import NavButton from "../NavButton";
import HeaderWrapper from "../HeaderWrapper";

const menu = [
  { title: "Buy", id: 1 },
  { title: "About Us", id: 2 },
  { title: "Roadmap", id: 3 },
  { title: "Collection", id: 4 },
  { title: "FAQ", id: 5 },
  { title: "Shroom Scouts", id: 6 },
  { title: "Leaderboard", id: 7 },
  { title: "Rarity", id: 8 },
];

function Header() {
  return (
    <HeaderWrapper>
      <NavMenu menu={menu} />
      <NavButton />
    </HeaderWrapper>
  );
}

export default Header;
