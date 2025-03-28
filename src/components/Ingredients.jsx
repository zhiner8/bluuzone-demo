import React from "react";
import forest from "../assets/still-forest.jpg";

const Ingredients = () => {
  return (
    <div id="ingredients" className="relative md:h-[80vh] overflow-hidden">
      {/* Background image */}
      <img
        className="absolute top-0 left-0 h-full md:h-[100vh] md:w-full object-cover"
        src={forest}
        alt="Forest background"
      />

      {/* Centered Text Container */}
      <div className="relative text-white h-full flex justify-center items-center px-8 md:mt-0 mt-10">
        <div className="text-sm md:w-3/5 text-center font-oxygenlight md:text-xl mt-10 leading-relaxed">
          In a single plastic water bottle, there can be up to 120,000 pieces of
          micro and nano plastics. These harmful particles leach into our
          drinking water, leading to serious health issues like infertility,
          cancer, heart problems, and weakened immunity. The convenience of
          plastic water bottles has come at the expense of our health.
          <div className="mt-4">
            Recognizing this issue, Bluuzone Bottles is pioneering a disruptive
            solution: a 100% plastic-free, disposable water bottle. Bluuzone
            Bottles offers a healthier and more sustainable alternative with
            all-natural, biodegradable bottles. Crafted from eco-friendly
            materials such as mycelium, beeswax, and resin, our bottles are
            designed to eliminate the risk of micro and nano plastics in
            drinking water. Each bottle is pre-filled with filtered water,
            ensuring a safe and convenient hydration experience that doesn’t
            compromise consumer health or the environment.
          </div>
          <div className="mt-8 mb-10">
            Our core promise is simple: “Clean bottle, clean water - hydration
            without harm.”
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
