// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import Activities from "./components/Activities";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import CustomCursor from "./components/CustomCursor";


const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
      <div className="">
        <CustomCursor />
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Certificate />
        <Activities />
        <Hireme />
      </div>
  );
};

export default App;
