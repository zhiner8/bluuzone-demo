import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Bluuzone New Logo png.png";
import menuIcon from "../assets/menu.png";

const NavBar = () => {
  const location = useLocation(); // Get current route
  const isInvertedPage =
    location.pathname === "/about" || location.pathname === "/shop";

  const [isInverted, setIsInverted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isInvertedPage) {
      setIsInverted(true);
      return;
    }
    if (location.pathname === "/missionPage") {
      setIsInverted(false);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const missionSection = document.getElementById("mission");
      const ingredientsSection = document.getElementById("ingredients");
      const aboutSection = document.getElementById("about");

      if (
        !heroSection ||
        !missionSection ||
        !ingredientsSection ||
        !aboutSection
      )
        return;

      const navbar = document.querySelector("nav");
      const navbarHeight = navbar?.offsetHeight || 0;

      const heroBottom =
        heroSection.getBoundingClientRect().bottom - navbarHeight;
      const missionTop =
        missionSection.getBoundingClientRect().top - navbarHeight;
      const ingredientsTop =
        ingredientsSection.getBoundingClientRect().top - navbarHeight;
      const aboutTop = aboutSection.getBoundingClientRect().top - navbarHeight;

      if (heroBottom > 0) {
        setIsInverted(false);
      } else if (missionTop <= 0 && ingredientsTop > 0) {
        setIsInverted(true);
      } else if (ingredientsTop <= 0 && aboutTop > 0) {
        setIsInverted(false);
      } else if (aboutTop <= 0) {
        setIsInverted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInvertedPage]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-neutral-700/80 ${
        isInvertedPage || isInverted
          ? "bg-roseda text-bone"
          : "bg-bone text-roseda"
      }`}
    >
      <div className="flex justify-between items-center mx-10 py-4">
        {/* Logo */}
        <Link to="/home">
          <img src={logo} alt="Bluuzone Logo" className="h-24 w-auto" />
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <img src={menuIcon} alt="Menu" className="h-10 w-10" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex px-4 font-oxygenlight text-2xl space-x-12 tracking-wide">
            <li>
              <Link className="hover:text-bark" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-bark" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-bark" to="/missionPage">
                Mission
              </Link>
            </li>
            <li>
              <Link className="hover:text-bark" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Shop Now Button */}
        <Link
          to="/shop"
          className={`hidden md:block font-oxygenlight px-6 py-3 rounded-lg font-semibold transition duration-300 ${
            isInvertedPage || isInverted
              ? "bg-bone text-roseda hover:bg-bark hover:text-bone"
              : "bg-roseda text-white hover:bg-bark"
          }`}
        >
          Shop Now
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-30 left-0 w-full bg-bone transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-2xl font-oxygenlight">
          <li>
            <Link className="hover:text-bark" to="/home" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-bark" to="/shop" onClick={toggleMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-bark"
              to="/missionPage"
              onClick={toggleMenu}
            >
              Mission
            </Link>
          </li>
          <li>
            <Link className="hover:text-bark" to="/about" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
