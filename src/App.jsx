import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Ingredients from "./components/Ingredients";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
      <Mission />
      <Ingredients />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
