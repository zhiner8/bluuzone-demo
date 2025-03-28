import bottle from "../assets/placeholder-bottle.jpg";
import bottle2 from "../assets/placeholder-bottle2.webp";
import bottle3 from "../assets/placeholder-bottle3.webp";
import robbie from "../assets/Robbie Ballentine.avif";
import allison from "../assets/Allison Pine.avif";
import ryan from "../assets/Ryan Desantis.avif";
import julia from "../assets/Julia Babun.avif";
import gursimran from "../assets/Gursimran Grewal.avif";

export const products = [
  {
    bottleColor: "Black",
    price: "$20",
    image: bottle,
  },
  {
    bottleColor: "Blue",
    price: "$20",
    image: bottle2,
  },
  {
    bottleColor: "White",
    price: "$20",
    image: bottle3,
  },
];
export const resourcesLinks = [
  { href: "#", text: "All Products" },
  { href: "#", text: "New" },
  { href: "#", text: "Best Sellers" },
];

export const platformLinks = [
  { href: "#", text: "Shipping & Returns" },
  { href: "#", text: "Store Policy" },
  { href: "#", text: "Payment Methods" },
  { href: "#", text: "FAQ" },
];

export const communityLinks = [
  { href: "#", text: "Email: bluuzonebottles@gmail.com" },
];
export const team = [
  {
    name: "Allison Pine",
    position: "CEO", // Example position
    image: allison,
    linkedin: "https://www.linkedin.com/in/allison-pine1/",
  },
  {
    name: "Robert Ballentine",
    position: "CRO", // Example position
    image: robbie,
    linkedin: "https://www.linkedin.com/in/robert-ballentine08/",
  },

  {
    name: "Gursimran Grewal",
    position: "COO", // Example position
    image: gursimran,
    linkedin: "https://www.linkedin.com/in/grewalgs/",
  },
];
