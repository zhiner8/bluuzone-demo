import React from "react";
import heroVideo from "../assets/scenic-forest.mp4";
import logo from "../assets/bluuzone-logo.png";
import { Link } from "react-router-dom";

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
      <div className="flex justify-center mt-12 text-white mx-80">
        <div className="z-10 text-center">
          <Link to="/shop">
            <img src={logo} alt="Bluuzone Logo" className="mx-auto w-3/5" />
          </Link>
          {/*}
          <a
            href="#shop"
            className="inline-block mt-8 bg-roseda hover:bg-bark font-oxygenlight  px-7 py-4 rounded-lg font-semibold transition duration-300"
          >
            Shop Now
          </a>
          */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
