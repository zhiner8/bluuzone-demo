import React from "react";
import bottle from "../assets/cropped_bottle.png";
import mushroom from "../assets/magical_mushroom.png";
import revyrie from "../assets/revyrie.jpg";
import nixon from "../assets/nixon_peabody.png";
import sc from "../assets/sc_innovates.jpg";
import ecovative from "../assets/ecovative.png";
import packaging from "../assets/mushroom_packaging.webp";

const endorsements = [
  { img: mushroom, alt: "Magical Mushroom" },
  { img: revyrie, alt: "Revyrie" },
  { img: nixon, alt: "Nixon Peabody" },
  { img: sc, alt: "SC Innovates" },
  { img: ecovative, alt: "Ecovative" },
  { img: packaging, alt: "Mushroom Packaging" },
];

const Endorsementv3 = () => {
  return (
    <div className="bg-bone flex flex-col items-center py-20 space-y-10 px-6">
      {/* Top Section: Paragraphs + Bottle */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-7xl space-y-10 lg:space-y-0 lg:space-x-20">
        {/* Our Product */}
        <div className="max-w-sm text-center lg:text-right text-ebony font-oxygenlight text-base md:text-lg">
          <h2 className="font-breathdemo text-2xl text-roseda mb-2">
            Our Product
          </h2>
          <p>
            Bluuzone bottles are crafted from biodegradable materials that
            decompose naturally — no microplastics, no pollution. Designed with
            durability and sustainability in mind, they’re safe for you and the
            planet.
          </p>
        </div>

        {/* Bottle */}
        <img src={bottle} alt="bottle" className="h-[60vh] mb-4 lg:mb-0" />

        {/* Who We Are */}
        <div className="max-w-sm text-center lg:text-left text-ebony font-oxygenlight text-base md:text-lg">
          <h2 className="font-breathdemo text-2xl text-roseda mb-2">
            Who We Are
          </h2>
          <p>
            We're a passionate team committed to protecting people by
            eliminating harmful materials from everyday products. Our mission
            starts with your health — and extends to the planet — by creating
            safe, sustainable alternatives to plastic.
          </p>
        </div>
      </div>

      {/* Endorsements row */}
      <div className="flex flex-wrap justify-center gap-16 pt-10">
        {endorsements.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.alt}
            className="w-36 h-auto object-contain bg-white shadow-lg rounded-md transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default Endorsementv3;
