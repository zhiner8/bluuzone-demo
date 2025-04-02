import React, { useState } from "react";
import here from "../assets/pretty-forest.jpg";
import test from "../assets/insert-here-test-trans.jpg";

const Shop = () => {
  const [quantity, setQuantity] = useState(1);
  const [hovered, setHovered] = useState(false);

  return (
    <div className=" bg-bone flex flex-col items-center">
      <h1 className="text-center text-3xl md:text-5xl text-roseda font-breathdemo mt-16">
        You're Drinking Plastic. Choose Bluuzone.
      </h1>
      <div className="flex flex-col lg:flex-row items-center md:justify-start mt-12 md:mb-20">
        {/* Image container with hover effect */}
        <div
          className="relative w-11/12 mt-2 lg:w-1/2 h-[50vh] md:h-[70vh] rounded-xl md:m-8 overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Default Image */}
          <img
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            src={here}
            alt="product"
          />

          {/* Hover Image */}
          <img
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            src={test}
            alt="product-hover"
          />
        </div>

        {/* Content on the right side */}
        <div className="lg:w-1/2 p-14">
          <h1 className="text-3xl md:text-5xl font-breathdemo text-roseda mb-6">
            Bluuzone - Plastic-Free
          </h1>
          <p className=" text-base md:text-lg font-oxygenlight text-gray-700 mb-4">
            Stay hydrated without the plastic guilt! Bluuzone’s 100%
            plastic-free bottles biodegrade naturally, offering a sustainable
            alternative to traditional bottled water.
          </p>
          <p className="text-base md:text-lg font-oxygenlight text-gray-700 mb-4">
            Bluuzone Bottles are crafted from eco-friendly materials like
            mycelium, beeswax, and resin, ensuring a microplastic-free,
            all-natural hydration experience. Enjoy crisp, filtered water while
            protecting both your health and the planet.
          </p>
          <ul className="list-disc list-inside text-base md:text-lg font-oxygenlight text-gray-700 mb-4">
            <li>24-pack of 16.9 oz bottles</li>
            <li>100% plastic-free & biodegradable</li>
            <li>No microplastics, no harmful chemicals</li>
          </ul>

          {/* Dropdown for selecting quantity */}
          <div className="mb-6">
            <label
              htmlFor="quantity"
              className="block text-base md:text-lg font-oxygenlight text-gray-700 mb-2"
            >
              Select Quantity:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border text-gray-700 border-gray-300 rounded-xl text-base md:text-lg font-oxygenlight"
            >
              <option value="1">1 Pack</option>
              <option value="2">2 Packs</option>
              <option value="3">3 Packs</option>
              <option value="4">4 Packs</option>
            </select>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            className="p-4 w-full bg-roseda text-base md:text-xl hover:bg-bark text-white font-oxygenlight rounded-xl"
          >
            Add to Cart - ${(19.99 * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
