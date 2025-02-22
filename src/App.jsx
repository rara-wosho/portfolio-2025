import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure you import the CSS for AOS effects

import "./index.css";

import Introduction from "./components/Introduction";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Versions from "./components/ui/Versions";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container px-3 px-md-5 main-container position-relative">
        <Introduction />
        <AboutSection />
        <div className="row px-1">
          <div className="px-2 col col-12 mb-3 mb-md-0 col-md-5">
            <TechStack />
          </div>
          <div className="px-2 col col-12 col-md-7">
            <Projects />
          </div>
        </div>

        <Footer />

        <Versions />
      </div>
    </>
  );
}

export default App;
