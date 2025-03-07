import React from "react";
import { Captions, TentTree } from "lucide-react";
import { Sprout } from "lucide-react";
import { Droplets } from "lucide-react";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="h-[70vh] bg-bone overflow-hidden flex flex-col items-center"
    >
      <h1 className="mt-20 text-4xl font-breathdemo text-roseda">
        Why Choose Bluuzone Bottles
        <span className="font-breathdemo font-thin">?</span>
      </h1>
      <div className="flex flex-wrap pt-20 justify-center gap-10 md:gap-10 lg:gap-10">
        <div className="flex flex-col items-center">
          <TentTree color="#ccbfa3" size={190} />
          <h1 className="mt-10 font-bold font-breathdemo text-xl text-roseda">
            Pure Hydration, Zero Plastic
          </h1>
          <p className="text-sage mt-4 text-lg text-center font-oxygenlight max-w-[400px]">
            Bluuzone Bottles are 100% plastic-free and biodegradable,
            eliminating harmful microplastics while keeping your water clean and
            safe.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Sprout color="#ccbfa3" size={190} />
          <h1 className="mt-10 font-bold font-breathdemo text-xl text-roseda">
            Sustainable Innovation
          </h1>
          <p className="text-sage mt-4 text-lg text-center font-oxygenlight max-w-[400px]">
            Join Bluuzone in redefining hydration with eco-friendly, disposable
            bottles made from mycelium, beeswax, and resin—good for you and the
            planet.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Droplets color="#ccbfa3" size={190} />
          <h1 className="mt-10 font-bold font-breathdemo text-xl text-roseda">
            Revolutionizing Hydration
          </h1>
          <p className="text-sage mt-4 text-lg text-center font-oxygenlight max-w-[400px]">
            Bluuzone Bottles offer a healthier, plastic-free alternative to
            traditional water bottles, leading the way toward a cleaner,
            sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
