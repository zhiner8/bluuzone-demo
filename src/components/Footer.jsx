import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="border-t bg-bone py-24 border-neutral-700">
      <div className="flex flex-wrap justify-center gap-10 md:gap-10 lg:gap-60 mt-4">
        <div>
          <h3 className="text-md text-roseda font-breathdemo font-bold mb-4">
            Shop
          </h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-sage font-oxygenlight hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-bold text-roseda font-breathdemo mb-4">
            Policy
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-sage font-oxygenlight hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-bold font-breathdemo text-roseda mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-sage font-oxygenlight hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
