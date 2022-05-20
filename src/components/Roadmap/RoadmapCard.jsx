import React from "react";

const RoadmapCard = ({ cards }) => {
  return cards.map((card) => (
    <div
      key={card.id}
      className="flex gap-10 justify-left my-3 bg-white p-10 rounded-md w-3/4"
    >
      <img className="w-[80px] h-[80px]" src={card.img} alt="" />
      <div>
        <h2>{card.title}</h2>
        <div>
          {card.list.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  ));
};

export default RoadmapCard;
