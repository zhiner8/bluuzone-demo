import React from "react";
import forest from "../assets/forestmission.jpg"; // Original forest image
import pretty_forest from "../assets/insert-here.jpg"; // Updated import

const MissionPage = () => {
  return (
    <div className="bg-bone">
      {/* Image container */}
      <div className="relative md:h-1/5 flex items-center justify-center">
        <img
          src={forest}
          alt="forest tag"
          className="md:h-[60vh] h-full w-full object-cover"
        />
        {/* Centered Text container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-5 p-6">
          <h1 className="text-3xl md:text-7xl font-breathdemo font-bold">
            Our Mission
          </h1>
          <p className="px-10 md:p-0 mt-4 text-base md:text-2xl font-breathdemo">
            Bluuzone Bottles' mission, values, and fundamental principles
          </p>
        </div>
      </div>

      {/* Mission section with text and image side by side */}
      <div className="flex flex-col md:flex-row items-center justify-center md:text-left text-center md:mt-36 md:mx-32">
        {/* Left: Text content */}
        <div className="md:w-1/2 p-8">
          <h1 className="font-breathdemo text-xl md:text-4xl text-roseda">
            Hydration Without Harm
          </h1>
          <p className="mt-4 font-oxygenlight text-gray-700  text-sm md:text-lg">
            At Bluuzone, we believe that staying hydrated shouldn’t come at the
            expense of our planet. Every year, billions of plastic bottles
            pollute our oceans, landfills, and ecosystems, leaching harmful
            microplastics into the environment and even into our bodies. That’s
            why we created Bluuzone Bottles—a 100% plastic-free, biodegradable
            alternative designed for a healthier you and a cleaner planet. Our
            mission, "Hydration Without Harm," is more than just a slogan—it’s a
            commitment to providing safe, sustainable, and innovative solutions
            for the future of hydration.
          </p>
          <p className="mt-4 font-oxygenlight text-gray-700 text-sm md:text-lg">
            With a focus on eco-conscious materials like mycelium, beeswax, and
            plant-based resins, Bluuzone Bottles decompose naturally without
            leaving behind toxins or waste. Unlike traditional plastic, which
            lingers for centuries, our bottles return to the earth in just a
            fraction of the time. By choosing Bluuzone, you're not just making a
            better choice for your own well-being—you're actively reducing
            plastic pollution, conserving natural resources, and championing a
            movement for change. Together, we can redefine hydration and build a
            future where clean water and a clean planet go hand in hand.
          </p>
        </div>

        {/* Right: Image (pretty-forest instead of bottleImage) */}
        <div className="md:ml-20 md:w-1/2 w-5/6 flex justify-center">
          <img
            src={pretty_forest}
            alt="Pretty Forest"
            className="md:h-[60vh] rounded-xl"
          />
        </div>
      </div>

      {/* Second Section (flipped layout with the image on the left and text on the right) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:mt-36 md:mx-32 md:text-left text-center">
        {/* Left: Image (pretty-forest instead of bottleImage) */}
        <div className="md:mr-20 md:w-1/2 flex justify-center">
          <img
            src={pretty_forest}
            alt="Pretty Forest"
            className="md:h-[60vh] rounded-xl"
          />
        </div>

        {/* Right: Text content */}
        <div className="md:w-1/2 p-8">
          <h1 className="font-breathdemo text-xl md:text-4xl text-roseda">
            Our Values
          </h1>
          <p className="mt-4 font-oxygenlight text-gray-700 text-sm md:text-lg">
            At Bluuzone, our values are the foundation of everything we do. We
            believe in sustainable innovation, responsibility, and the power of
            collaboration to drive positive change. Our commitment to reducing
            plastic waste, providing eco-friendly solutions, and promoting
            environmental awareness drives us to constantly push boundaries in
            the pursuit of a cleaner, greener planet.
          </p>
          <p className="mt-4 font-oxygenlight text-gray-700 text-sm md:text-lg">
            We value transparency, integrity, and accountability. We understand
            the importance of educating and empowering individuals to make
            conscious decisions about the products they choose and the impact
            those choices have on the environment. Together, we’re working to
            create a more sustainable future for all.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center md:mt-36 md:mx-32 md:text-left text-center ">
        {/* Left: Text content */}
        <div className="md:w-1/2 p-8">
          <h1 className="font-breathdemo text-xl md:text-4xl text-roseda">
            Our Impact
          </h1>
          <p className="mt-4 font-oxygenlight text-gray-700 text-sm md:text-lg">
            At Bluuzone, we're not just creating bottles— we're creating a
            movement. By offering a truly sustainable alternative to plastic
            bottles, we've already seen a significant reduction in single-use
            plastics in our communities. We are proud of the lives we've
            touched, and the growing number of people who are joining the
            movement to protect the planet.
          </p>
          <p className="mt-4 font-oxygenlight text-gray-700 text-sm md:text-lg">
            From schools to businesses, individuals to activists, Bluuzone
            Bottles is making a global impact. By choosing Bluuzone, you are not
            only making a personal choice for a better, healthier future—you are
            contributing to a global effort to protect our oceans, our forests,
            and our future.
          </p>
          <p className="mt-4 font-oxygenlight text-gray-700 text-sm md:text-lg">
            Join us as we continue to expand our impact and make the world a
            cleaner, greener place for generations to come.
          </p>
        </div>

        {/* Right: Image (pretty-forest instead of bottleImage) */}
        <div className="md:ml-20 md:w-1/2 flex justify-center md:mb-0 mb-10">
          <img
            src={pretty_forest}
            alt="Pretty Forest"
            className="md:h-[60vh] rounded-xl md:mb-20"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
