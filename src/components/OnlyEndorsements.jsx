import React from "react";
import mushroom from "../assets/magical_mushroom.png";
import revyrie from "../assets/revyrie.jpg";
import nixon from "../assets/nixon_peabody.png";
import sc from "../assets/sc_innovates.jpg";
import ecovative from "../assets/ecovative.png";
import packaging from "../assets/mushroom_packaging.webp";

const endorsements = [
  { img: mushroom, url: "https://magicalmushroom.com/" },
  { img: revyrie, url: "https://www.revyrie.com/" },
  { img: nixon, url: "https://www.nixonpeabody.com/" },
  { img: sc, url: "https://scinnovates.org/" },
  { img: ecovative, url: "https://ecovative.com/" },
  {
    img: packaging,
    url: "https://mushroompackaging.com/?srsltid=AfmBOoqn_K7v8TpRAGQ86jrh2Enxa4zJ5sgpiK7NrOm6TLoDFU9mKv53",
  },
];

const OnlyEndorsements = () => {
  return (
    <div className="border border-gray-500 bg-bone">
      <h1 className="text-roseda font-breathdemo flex justify-center pt-8 text-2xl xl:text-4xl pb-4">
        Endorsed By:
      </h1>
      <div className="flex flex-wrap justify-center gap-16 m-6">
        {endorsements.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={`endorsement-${index}`}
              className="w-28 xl:w-32 h-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OnlyEndorsements;
