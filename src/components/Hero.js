import React from "react";
export default function Hero() {

    return (
        <section id="hero" class="  ">
          <div className="w-full px-4  md:px-0  mx-auto flex items-center min-h-screen bg-red-100  flex-wrap bg-none md:bg-hero bg-contain bg-right hero bg-no-repeat"> 
            <div className=" md:pl-16 md:text-left text-center mt-32 md:mt-0 md:mx-0 mx-auto md:mb-0  ">
              
            <h1 className="mb-8  md:mt-0 md:text-7xl text-5xl font-medium text-gray-700 ">
            Hi, I'm Zara. 
              </h1>
              <h3 className="title-font text-gray-700 md:text-5xl text-3xl mb-4  ">

              A design-minded Developer <br></br>focused on building beautiful<br></br> interfaces. 

              
                 {/* A web designer who care, build relationships, have industry experience, and create websites that catch the eye. */}
                {/* <br className="hidden  " />I love to build amazing apps and websites. */}
              </h3>
             
              <div className="flex mt-10 md:justify-start justify-center">
                <a
                  href="#contact"
                  className="inline-flex py-2 md:px-8 px-4 focus:outline-none text-lg rounded-full border-2 border-red-400 bg-red-400 hover:border-red-450 hover:bg-red-450 text-white transition ease-in-out duration-500">
                  Get in touch
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex py-2 md:px-6 px-2 focus:outline-none text-lg rounded-full border-2 border-red-400 bg-none hover:border-red-450 hover:bg-red-450 text-red-400 hover:text-white transition ease-in-out duration-500">
                  See My Past Work
                </a>
              </div>
            </div>
            {<div className="w-full md:hidden">
              <img
                className="w-full"
                alt="hero"
                src="./Images/personal/portfolio-hero3.png"
              />
            </div> }
          </div>
      
      <div className='w-full'>
      <img
                className="w-full"
                alt="hero"
                src="./Images/personal/hero-bottom.png"
              />
      </div>
        </section>
      );


}
 