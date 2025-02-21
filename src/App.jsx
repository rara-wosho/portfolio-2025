import "./index.css";

import Introduction from "./components/Introduction";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div className="container main-container px-3 px-md-5 py-4">
        <Introduction />
        <AboutSection />
        <Projects />
        <TechStack />
      </div>
    </>
  );
}

export default App;
