import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import linkedinIcon from "../assets/linkedin-icon.png";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // <-- new

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter an email!");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    setLoading(true); // <-- new

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwV1TD6I3HydYaOrBoPBUqtrNBkw6BPNSDpuVRDCYCi73WIzQtpA83Km54tlh4EvbMC/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `email=${encodeURIComponent(email)}`,
        }
      );

      alert("Thanks for joining!");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false); // <-- new
    }
  };

  return (
    <footer className="border-t bg-bone border-neutral-700 flex flex-col justify-end">
      <div className="flex justify-center ">
        <h2 className="text-roseda font-breathdemo text-xl md:text-3xl mb-8 text-center mt-10 md:mt-32 mx-10">
          Exclusive early access to our next product launch – subscribe now!
        </h2>
      </div>
      <div className="flex justify-center ">
        <input
          placeholder="Join the list – your email here..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="font-oxygenlight w-2/3 md:w-1/3 p-2 text-sm md:text-xl text-roseda border border-roseda rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading} // <-- new
          className={`ml-4 md:w-1/6 p-4 text-sm md:text-base rounded-md text-white transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-roseda hover:bg-bark"
          }`}
        >
          {loading ? "Joining..." : "Join"} {/* <-- new */}
        </button>
      </div>
      <div className="pt-20 pb-20 md:pt-48 md:pb-44">
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
              <ul className="space-y-2">
                <a
                  href="https://www.linkedin.com/company/bluuzone-bottles/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
