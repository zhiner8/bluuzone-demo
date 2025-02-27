import React, { useState, useEffect } from "react";
import logo from "../assets/Bluuzone New Logo png.png";

const NavBar = () => {
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const missionSection = document.getElementById("mission");
      const ingredientsSection = document.getElementById("ingredients");
      if (!heroSection || !missionSection || !ingredientsSection) return;

      const navbar = document.querySelector("nav");
      const navbarHeight = navbar?.offsetHeight || 0;

      const heroBottom =
        heroSection.getBoundingClientRect().bottom - navbarHeight;
      const missionTop =
        missionSection.getBoundingClientRect().top - navbarHeight;
      const ingredientsTop =
        ingredientsSection.getBoundingClientRect().top - navbarHeight;

      if (heroBottom > 0) {
        // Revert back to original when scrolling to the hero section
        setIsInverted(false);
      } else if (missionTop <= 0 && ingredientsTop > 0) {
        // Change when reaching the mission section
        setIsInverted(true);
      } else if (ingredientsTop <= 0) {
        // Revert when reaching the ingredients section
        setIsInverted(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-neutral-700/80 ${
        isInverted ? "bg-roseda text-bone" : "bg-bone text-roseda"
      }`}
    >
      <div className="flex justify-between items-center mx-10">
        {/* Logo & Navigation Links */}
        <img src={logo} alt="Bluuzone Logo" className="h-24 w-auto" />

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex px-4 font-oxygenlight text-2xl space-x-12 tracking-wide">
            <li>
              <a className="hover:text-bark" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-bark" href="#mission">
                Shop
              </a>
            </li>
            <li>
              <a className="hover:text-bark" href="#ingredients">
                Mission
              </a>
            </li>
            <li>
              <a className="hover:text-bark" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Shop Now Button */}
        <a
          href="#shop"
          className={`hidden md:block font-oxygenlight px-6 py-3 rounded-lg font-semibold transition duration-300 ${
            isInverted
              ? "bg-bone text-roseda hover:bg-dun"
              : "bg-roseda text-white hover:bg-bark"
          }`}
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
