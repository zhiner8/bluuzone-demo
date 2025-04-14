import React from "react";
import cropped_bottle from "../assets/cropped_bottle.png";
import mushroom from "../assets/magical_mushroom.png";
import revyrie from "../assets/revyrie.jpg";
import nixon from "../assets/nixon_peabody.png";
import sc from "../assets/sc_innovates.jpg";
import ecovative from "../assets/ecovative.png";
import packaging from "../assets/mushroom_packaging.webp";

const Endorsementv2 = () => {
  const endorsements = [nixon, sc, packaging, revyrie, ecovative, mushroom];

  return (
    <div className="relative w-full min-h-screen bg-bone flex items-center justify-center overflow-hidden">
      {/* Left border */}
      <div className="absolute top-0 left-0 h-full w-[5vw] bg-roseda z-0" />

      {/* Right border */}
      <div className="absolute top-0 right-0 h-full w-[5vw] bg-roseda z-0" />

      {/* Main content */}
      <div className="relative w-[90vh] h-[90vh] z-10">
        {/* Bottle in center */}
        <img
          src={cropped_bottle}
          alt="bottle"
          className="absolute top-1/2 left-1/2 h-[70vh] transform -translate-x-1/2 -translate-y-1/2 z-10"
        />

        {/* Endorsement images around bottle */}
        {endorsements.map((img, index) => {
          const angle = (360 / endorsements.length) * index;
          const radius = 300;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
              }}
            >
              <img
                src={img}
                alt={`endorsement-${index}`}
                className="w-40 h-40 object-contain rounded-full shadow-md bg-white transition-transform duration-300 hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Endorsementv2;
