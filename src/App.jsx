import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import About from './components/About';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import SplashCursor from './components/SplashCursor'



function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,       // <- IMPORTANT: allow animation on scroll up
    mirror: true       // <- YES: animate when scrolling back up
  });
}, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SplashCursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <ContactForm />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
