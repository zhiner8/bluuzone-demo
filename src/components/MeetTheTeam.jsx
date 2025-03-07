import React from "react";
import { team } from "../constants"; // Import the team data
import linkedinIcon from "../assets/linkedin-icon.png"; // Import LinkedIn icon

const MeetTheTeam = () => {
  return (
    <div className="h-[100vh] bg-bone flex flex-col items-center">
      <h1 className="font-breathdemo text-roseda text-4xl mt-4 p-24">
        Meet the Team
      </h1>

      {/* First Row (3 people) */}
      <div className="grid grid-cols-3 gap-14 px-10">
        {team.slice(0, 3).map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full mx-auto mb-6"
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

      {/* Second Row (2 people, centered) */}
      <div className="grid grid-cols-2 gap-14 px-10 mt-16">
        {team.slice(3, 5).map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full mx-auto mb-6"
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
