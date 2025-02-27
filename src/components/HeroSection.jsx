import React from "react";
import heroVideo from "../assets/scenic-forest.mp4";

const HeroSection = () => {
  return (
    <div id="hero" className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-[80vh] object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Center the content */}
      <div className="flex justify-center mt-48 text-white mx-80">
        <div className="z-10 text-center">
          <h1 className="text-8xl font-breathdemo ">Hydration Without Harm.</h1>
          <p className="text-2xl font-oxygenlight mt-4 ">
            A 100% plastic free disposable water bottle made from mycelium
            biocomposite
          </p>
          <a
            href="#shop"
            className="inline-block mt-8 bg-roseda hover:bg-bark font-oxygenlight  px-7 py-4 rounded-lg font-semibold transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
