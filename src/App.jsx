import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Ingredients from "./components/Ingredients";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Section from "./components/Section";
import AboutNavBar from "./components/AboutNavBar";
import ScrollToTop from "./components/ScrollToTop";
import MeetTheTeam from "./components/MeetTheTeam";
import Shop from "./components/Shop";
import MissionPage from "./components/MissionPage";
import Endorsement from "./components/Endorsement";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <>
              <NavBar />
              <HeroSection />
              <Mission />
              <Ingredients />
              <AboutUs />
              <Section />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <AboutNavBar />
              <MeetTheTeam />
              <Footer />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <NavBar />
              <Shop />
              <Footer />
            </>
          }
        />
        <Route
          path="/missionPage"
          element={
            <>
              <NavBar />
              <MissionPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}
export default App;
