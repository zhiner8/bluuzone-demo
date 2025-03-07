import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import linkedinIcon from "../assets/linkedin-icon.png";
const Footer = () => {
  return (
    <footer className="border-t bg-bone border-neutral-700 h-[80vh] flex flex-col justify-end">
      <div className="flex justify-center ">
        <h2 className="text-roseda font-breathdemo text-3xl mb-8">
          Exclusive early access to our next product launch – subscribe now!
        </h2>
      </div>
      <div className="flex justify-center ">
        <input
          placeholder="Join the list – your email here..."
          type="text"
          className="font-oxygenlight w-1/3 p-2 text-xl text-roseda border border-roseda rounded-lg"
        ></input>
        <button
          type="button"
          className="ml-4 w-1/6 p-4 rounded-md text-white bg-roseda hover:bg-bark"
        >
          Join
        </button>
      </div>
      <div className="pt-48 pb-44">
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
