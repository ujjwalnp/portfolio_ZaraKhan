import React from "react"; 
import "animate.css/animate.min.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";  
import Experience from "./components/Experience";
 

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience/>
      <Projects />       
      <Contact />
   

        
      <div className="text-center w-full bg-gray-700 hidden md:block text-gray-500 mt-44 pb-16  md:py-16">Designed & Built by Zara Khan</div>

    </main>
    
  );
}