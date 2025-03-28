import React from "react";
import { products } from "../constants"; // Import the product data

const Mission = () => {
  return (
    <div id="mission" className="h-[180vh] md:h-[90vh] bg-bone overflow-hidden">
      {/* Header outside the flex container */}
      <h1 className="text-2xl mt-10 mx-4 md:text-4xl text-center md:mt-20 md:my-20 tracking-wide font-breathdemo text-roseda ">
        Refreshing Hydration for Adventures
      </h1>
      {/* Flex container for products */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-8 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-roseda shadow-lg rounded-2xl p-6 hover:bg-bark"
          >
            <img
              src={product.image}
              alt={`${product.bottleColor} Bottle`}
              className="flex justify-center object-cover rounded-xl h-80 lg:h-96"
            />
            <h2 className="mt-4 text-xl font-bold text-white font-oxygenlight">
              {`${product.bottleColor} Bottle`}
            </h2>
            <p className="text-white mt-1 font-breathdemo">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
