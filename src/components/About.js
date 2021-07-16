import React from "react";
// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';



export default function About() {
  return (
    <section   id="about" >
      <p className="py-8"></p>
      <Slide left cascade duration={1000}>  
      <div className="text-gray-700 px-4 md:px-0  bg-white">
       
        <h1 className="md:text-6xl mt-16 text-4xl font-medium text-center title-font mb-4 ">
        About Me
      </h1> 
     
        <div className="  flex  flex-wrap  w-full px-4 md:px-0 md:w-5/6 items-center  md:mt-24 mt-16 mx-auto  ">
     <Slide left cascade duration={1000}>    <div className="md:flex-1   flex-initial relative w-full mb-20">
          <div className="z-20  relative overflow-hidden frame w-2/3 mx-auto border-8 border-white  shadow-lg hover:shadow-xl  transition ease-in-out duration-700 rounded-full">
            <img
              className=" inner-img  "
              alt="hero"
              src="./Images/personal/zara-khan.png"
            />
          </div>
          <div className="absolute w-full top-0 z-10 mx-auto">
            <img
              className="w-full "
              alt="hero"
              src="./Images/personal/img-bg.png"
            />
          </div>
        </div></Slide>
        <div className="md:flex-1   md:pl-0 flex-initial w-full flex h-full mb-20">
        <Slide left cascade duration={1000}>     <p className="lg:w-5/6 text-xl leading-relaxed text-left  se">
            <span className="font-medium text-xl">Hello!</span> My name is Zara
            and I enjoy creating things that live on the internet. As a
            Front-End developer, I enjoy bridging the gap between engineering
            and design. I always have a keen eye for aesthetics to create a beautiful
            product.
            <br></br>
            <br></br>
            My goal is to build applications that are scalable and efficient
            under the hood while providing engaging, pixel-perfect user
            experiences.
            <br></br>
            <br></br>
            My main focus these days is building accessible and digital
            experiences at{" "}
            <a  href="https://www.linkedin.com/company/blue-lion-web-studio/" className="hover:underline text-red-400   transition ease-in-out duration-500 cursor-pointer">
              Blue Lion web studio
            </a>{" "}
            for a variety of clients.
            <br></br>
            <br></br>
            <br></br>
            {/* When I'm not in front of a computer screen, I'm probably baking,
            visiting my mum, or just chilling with my baby. */}
          </p></Slide>
        </div>
      </div></div></Slide>
    </section>
  );
}
