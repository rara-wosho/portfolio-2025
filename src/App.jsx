import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure you import the CSS for AOS effects

import "./index.css";

import Introduction from "./components/Introduction";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import BeyondCoding from "./components/BeyondCoding";
import Connect from "./components/Connect";
import Timeline from "./components/Timeline";
import Commission from "./components/Commission";
import Sidebar from "./components/Sidebar";

function App() {
  const [loading, setLoading] = useState(true);
  const [open, setSidebar] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-screen d-flex align-items-center justify-content-center bg-secondary">
          <div class="chaotic-orbit"></div>
        </div>
      )}
      <div className="mx-auto px-3 px-md-5 main-container position-relative fade-opacity">
        {open && <Sidebar setSidebar={setSidebar} />}

        <Introduction setSidebar={setSidebar} />
        <AboutSection />
        <div className="row px-1 mb-3">
          <div className="px-2 col d-flex flex-column col-12 mb-3 mb-md-0 col-md-5">
            <TechStack />
            <BeyondCoding />
          </div>
          <div className="px-2 col col-12 col-md-7">
            <Projects />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 px-1 mb-3">
          <div className="col px-2 mb-3 mb-md-0">
            <Timeline />
          </div>
          <div className="col px-2 flex-1">
            <Connect />
            <Commission />
          </div>
        </div>

        <Footer />

        {/* <Versions /> */}
      </div>
    </>
  );
}

export default App;
