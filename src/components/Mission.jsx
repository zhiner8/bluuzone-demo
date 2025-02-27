import React from "react";
import { products } from "../constants"; // Import the product data

const Mission = () => {
  return (
    <div id="mission" className="h-[90vh] bg-bone overflow-hidden">
      {/* Header outside the flex container */}
      <h1 className=" text-4xl text-center mt-20 my-20 tracking-wide font-breathdemo text-roseda ">
        Refreshing Hydration for Adventures
      </h1>
      {/* Flex container for products */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-10 lg:gap-20 mt-8 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-roseda shadow-lg rounded-2xl p-6 hover:bg-bark"
          >
            <img
              src={product.image}
              alt={`${product.bottleColor} Bottle`}
              className="object-cover rounded-xl h-20 md:h-44 lg:h-60 xl:h-96"
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
