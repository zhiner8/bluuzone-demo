import React from "react";
import bluuzone_bottle from "../assets/IMG_4829-removebg-preview.png";
import mushroom from "../assets/magical_mushroom.png";
import revyrie from "../assets/revyrie.jpg";
import nixon from "../assets/nixon_peabody.png";
import sc from "../assets/sc_innovates.jpg";
import ecovative from "../assets/ecovative.png";
import packaging from "../assets/mushroom_packaging.webp";

const Endorsement = () => {
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

  return (
    <div className="bg-bone">
      <div className="xl:ml-10 flex flex-col lg:flex-row items-center">
        <img
          className="w-5/6 md:w-2/3 xl:w-1/3"
          src={bluuzone_bottle}
          alt="Bluuzone Bottle"
        />
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="lg:mt-20 lg:ml-4 pt-4 lg:pl-4 font-breathdemo text-xl md:text-3xl text-roseda text-center lg:text-left ">
            Who We Are:
          </h1>
          <p className="lg:ml-4 pt-4 lg:pl-4 w-5/6 font-oxygenlight text-base md:text-xl text-gray-700 text-center lg:text-left ">
            At Bluuzone Bottles, we’re redefining the future of food and
            beverage packaging. Our mission is to eliminate microplastics and
            reduce waste by creating innovative, biodegradable solutions that
            protect the planet and promote healthier living. Backed by a team of
            passionate innovators, we’re building a future free from single-use
            plastics — and there’s still so much more to achieve.
          </p>
          <h1 className="lg:ml-4 mt-4 pt-4 lg:pl-4 font-breathdemo text-xl md:text-3xl text-roseda text-center lg:text-left ">
            Endorsed By:
          </h1>
          <div className="lg:ml-4 pt-4 lg:pl-4 w-5/6 flex flex-wrap gap-6 mb-20 text-center lg:text-left justify-center lg:justify-start">
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
                  className="w-24 md:w-32 h-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endorsement;
