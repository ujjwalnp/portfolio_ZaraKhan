// import { ArrowRightIcon } from "@heroicons/react/solid";

import React from "react";

 

export default function Navbar() {
  return (
    <header id="header" className=" md:sticky hidden md:block bg-red-100 top-0 z-10">
      <div className="w-full mx-auto  flex flex-wrap  px-10 flex-col md:flex-row items-center">
        <a className=" md:my-10  my-6 ">
          <a className=" ">
            <img alt="Zara Khan Logo" className=" w-48" src='./images/personal/logo.png' />
          </a>
        </a>
        <nav className="mx-auto  mx-auto text-gray-700 flex space-x-10 flex-wrap items-center text-base justify-center">
          <a href="#about" className=" hover:text-red-450 transition ease-in-out duration-500 ">
            About
          </a>
          <a href="#experience" className=" hover:text-red-450 transition ease-in-out duration-500 ">
            Experience
          </a>
          <a href="#projects" className=" hover:text-red-450 transition ease-in-out duration-500 ">
            Work
          </a>

          <a href="#contact" className="hover:text-red-450 transition ease-in-out duration-500 ">
            Contact
          </a>
        </nav>
        <a
          href=" "
          className="inline-flex my-6 md:my-0 rounded-full items-center bg-red-400 border-0 py-2 px-7 focus:outline-none text-white hover:bg-red-450 transition ease-in-out duration-500 text-base ">
          Resume
          {/* <ArrowRightIcon className="w-6  hover:ml-6 transition ease-in-out duration-500 h-4 ml-3" /> */}
        </a>
      </div>
    </header>
  );
}