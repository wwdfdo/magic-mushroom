import completedOne from "../images/completedOne.png";
import completedTwo from "../images/completedTwo.png";
import progressThree from "../images/progressThree.png";
import progressFour from "../images/progressFour.png";

const cards = [
  {
    id: 1,
    title: "Pre Mint Launch",
    img: completedOne,
    list: [
      "- Community Building",
      "- Community Fund",
      "- Charity Fund",
      "- 300 Shrooms Held for Marketing",
      "- Discord OG Whitelist: September 23rd",
      "- Early Pre-Sale: September 24th",
    ],
  },
  {
    id: 2,
    title: "Mint",
    img: completedTwo,
    list: [
      "- Shroom Scouts Adventure Quest Announcement",
      "- 3 ETH added to the Community Fund every 25% of Sales",
      "- Donate 3 ETH to Medicinal Mushroom Research every 25% of Sales",
      "- 100+ ETH reserved for Partnerships, Hires, and Marketing Campaigns",
      "- Hire a Full-Time Meme Team",
      "- Mass Marketing Level #1 Campaign Begins before Adventure",
    ],
  },
  {
    id: 3,
    title: "The Adventure Begins",
    img: progressThree,
    list: [
      "- 14 Days after mint The Adventure is announced",
      "- 7 Days after mint The Grand Prize is announced",
      "- Adventure Map is released",
      "- Begin Level #2 Marketing Campaign",
    ],
  },
  {
    id: 4,
    title: "Expansion (1/1/2022 & Beyond)",
    img: progressFour,
    list: [
      "- Shroom companion NFTs released on Solana",
      "- Grow the Team",
      "- Marketing Push: Seek Major Brand Partnerships",
      "- Begin Level #3 Marketing Campaign",
    ],
  },
];

export function createCards() {
  return cards;
}
