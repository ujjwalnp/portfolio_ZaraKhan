import React from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    
    </main>
  );
}