import React from "react";
import { membersArray } from "../../arrays/membersArray";

const TeamMembersSection = () => {
  return (
    <div className="w-3/4 mx-auto py-28">
      <div>
        <div className="text-center">
          <h2 className="text-white text-5xl font-semibold mb-8">
            Meet Our Team
          </h2>
        </div>
        <div className="text-center w-1/2 mx-auto">
          <p className="text-white text-lg font-semibold mb-8">
            Our team is committed to innovation while being transparent, active,
            and above all prioritizing the members in our community
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-5">
        {membersArray.map((member) => (
          <div key={member.name}>
            <img src={member.img} alt="" />
            <h2 className="text-white text-xl font-bold leading-loose">
              {member.name}
            </h2>
            <p className="text-white text-md font-semibold leading-loose">
              {member.job}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersSection;
