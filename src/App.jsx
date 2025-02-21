import "./index.css";

import Introduction from "./components/Introduction";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container main-container px-3 px-md-5 py-4">
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
      </div>
    </>
  );
}

export default App;
