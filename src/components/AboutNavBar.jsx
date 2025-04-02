import React from "react";
import trees from "../assets/pretty-forest.jpg";

const AboutNavBar = () => {
  return (
    <div className="relative bg-bone overflow-hidden">
      {/* Flex container for image and content */}
      <div className="flex flex-col xl:flex-row items-center justify-start w-full h-full">
        {/* Image on the left side */}
        <img
          className="w-full h-[30vh] xl:w-1/2 xl:h-[90vh] object-cover xl:rounded-xl xl:m-8 "
          src={trees}
          alt="Trees background"
        />

        {/* Content on the right side */}
        <div className="text-center p-4 mt-4 mx-8 xl:w-1/2 md:p-14 xl:text-left">
          <h1 className="text-2xl md:text-3xl font-breathdemo text-roseda mb-4">
            About Bluuzone Bottles
          </h1>
          <p className="text-base md:text-lg font-oxygenlight text-gray-700 mb-4">
            Bluuzone Bottles was founded in 2024 by five college students
            passionate about wellness and sustainability. During a trip to
            Portugal, our shared concern about the harmful effects of plastic
            water bottles on both the environment and human health brought us
            together. Micro and nano plastics from these bottles are linked to
            infertility, cancer, and heart disease. We wanted to live healthy
            lives, protect our future, and eliminate plastic from our daily
            routines.
          </p>
          <p className="text-base md:text-lg font-oxygenlight text-gray-700 mb-4">
            That's when we asked ourselves: What if we could create a bottle
            that was simple, healthy, convenient, and free from plastic?
            Bluuzone Bottles are made from biodegradable, all-natural
            ingredients like mycelium, beeswax, and tree sap, offering a safe
            and eco-friendly alternative.
          </p>
          <p className="text-base md:text-lg font-oxygenlight text-gray-700 mb-4">
            Inspired by "Blue Zones"—regions where people live the longest and
            healthiest lives—we aim to make sustainable hydration the new
            normal. Our mission is to eliminate plastic water bottles and offer
            a healthier, more sustainable way to hydrate. Join us in creating a
            plastic-free future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutNavBar;
