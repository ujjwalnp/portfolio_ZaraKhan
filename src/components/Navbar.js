// import { ArrowRightIcon } from "@heroicons/react/solid";

import React from "react";
import { slide as Menu } from 'react-burger-menu'
import Slide from 'react-reveal/Slide';
 
import smoothscroll from 'smoothscroll-polyfill';
window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill(); 

export default function Navbar() {
  return (
  <header  id="header"  >
    
      <div className="md:sticky hidden overflow-x-hidden md:block bg-red-50 top-0 z-10">
      <Slide top cascade> 
      <div className="w-full mx-auto  flex flex-wrap  px-10 flex-col md:flex-row items-center">
        <div className=" md:my-6  ">
          <a href="/" className=" ">
            <img
              alt="Zara Khan Logo"
              className=" w-48"
              src="./images/personal/logo.png"
            />
          </a>
        </div>
        <nav className="mx-auto text-gray-700 flex space-x-10 flex-wrap items-center text-base justify-center">
          <a
            href="#about"
            className=" hover:text-red-450 transition  px-3 py-1    transform hover:scale-110 ease-in-out duration-500 "
          >
            About
          </a>
          <a
            href="#experience"
            className=" hover:text-red-450 transition  px-3 py-1   transform hover:scale-110  ease-in-out duration-500 "
          >
            Experience
          </a>
          <a
            href="#projects"
            className=" hover:text-red-450 transition  px-3 py-1    transform hover:scale-110  ease-in-out duration-500 "
          >
            Portfolio
          </a>

          <a
            href="#contact"
            className="hover:text-red-450 transition  px-3 py-1   transform hover:scale-110  ease-in-out duration-500 "
          >
            Contact
          </a>
        </nav>
        <a
          href="./ZaraKhan-Resume.pdf"
          target="_blank"
          className="inline-flex my-6 md:my-0 rounded-full items-center bg-red-400 border-0 py-2 px-7 focus:outline-none text-white hover:bg-red-450 transition ease-in-out duration-500 text-base "
        >
          Resume
          {/* <ArrowRightIcon className="w-6  hover:ml-6 transition ease-in-out duration-500 h-4 ml-3" /> */}
        </a>
      </div>

     
      </Slide>
      </div>

<div className="w-full md:hidden flex">
<div className="flex-1">
<a href="/"><img
              alt="Zara Khan Logo"
              className=" w-40 m-6"
              src="./images/personal/logo.png"
            /></a>
</div>
      <Menu right customBurgerIcon={ <img src="./Images/svg/menu.svg"  alt=" "/> } > 
<a   className="menu-item" href="#about">About</a>
<a  className="menu-item" href="#experience">Experience</a>
<a  className="menu-item" href="#projects">Portfolio</a>
<a   className="menu-item" href="#contact">Contact</a> 

<a
          href="./ZaraKhan-Resume.pdf"
          target="_blank"
          className="inline-flex text-center my-10 md:my-0 w-44 rounded-full items-center bg-red-400 border-0 py-2 px-7 focus:outline-none  text-white hover:bg-red-450 transition ease-in-out duration-500 text-base "
        >
          Resume
          {/* <ArrowRightIcon className="w-6  hover:ml-6 transition ease-in-out duration-500 h-4 ml-3" /> */}
        </a>


</Menu></div>

    </header>

    
  );
}
