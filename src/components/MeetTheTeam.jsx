import React from "react";
import { team } from "../constants"; // Import the team data
import linkedinIcon from "../assets/linkedin-icon.png"; // Import LinkedIn icon

const MeetTheTeam = () => {
  return (
    <div className="md:h-[80vh] bg-bone flex flex-col items-center">
      <h1 className="font-breathdemo text-roseda text-2xl md:text-4xl mt-4 md:mt-4 md:p-12">
        Meet the Team
      </h1>

      {/* Single Row (3 people, centered) */}
      <div className="grid md:grid-cols-3 gap-16 md:gap-28 px-10 mt-12 md:mt-24 mb-20">
        {" "}
        {/* Increased margin-top */}
        {team.slice(0, 3).map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-80 h-80 rounded-md mx-auto mb-6"
            />
            <h2 className="text-2xl font-semibold font-breathdemo text-roseda">
              {member.name}
            </h2>
            <div className="flex justify-center items-center gap-3 text-roseda font-oxygenlight text-lg">
              <p>{member.position}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
