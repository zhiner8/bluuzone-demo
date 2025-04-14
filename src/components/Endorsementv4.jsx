import React from "react";
import bottle from "../assets/wider_bottle_with_bg.png";

const Endorsementv4 = () => {
  return (
    <div className="bg-bone flex flex-col lg:flex-row justify-center">
      <div className="flex lg:w-1/2 justify-center lg:p-0 p-4">
        <img
          className="w-full lg:rounded-none rounded-2xl"
          src={bottle}
          alt="bottle"
        ></img>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center">
        <div className="flex flex-col items-center px-12 pb-6 lg:px-20 lg:mt-28">
          <h1 className="font-breathdemo text-roseda p-4 lg:p-10 text-2xl lg:text-4xl text-center">
            Who We Are:
          </h1>
          <p className=" text-lg lg:text-2xl font-oxygenlight text-gray-700 text-center">
            At Bluuzone, we’re redefining the future of food and beverage
            packaging. Our mission is to eliminate microplastics and reduce
            waste by creating innovative, biodegradable solutions that protect
            the planet and promote healthier living. Backed by a team of
            passionate innovators, we’re building a future free from single-use
            plastics — and there’s still so much more to achieve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Endorsementv4;
