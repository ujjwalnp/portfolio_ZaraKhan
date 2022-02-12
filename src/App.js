import React from "react";

import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Experties from "./components/experties";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />

      <About />
      <Experties />

      <Experience />
      <Projects />
      <Contact />
      <div className="text-center w-full bg-gray-700 hidden md:block text-gray-500 mt-44 pb-16  md:py-16">
        <span className="text-xl">&copy; </span> Designed & Developed by Zara
        Khan
      </div>
    </main>
  );
}
