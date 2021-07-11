import React from "react";


export default function About() {
    return (
        <section id="about" className="text-gray-700 px-4 md:px-0 mt-16 bg-white">
            <h1 className="md:text-6xl text-4xl font-medium text-center title-font mb-4 ">
                About Me
          </h1>
            <div className="container  flex  flex-wrap   mw-full  items-center  mt-24 mx-auto  ">

                <div className="md:flex-1  md:order-2 flex-initial relative w-full mb-20">
                    <div class="z-20  relative overflow-hidden frame w-2/3 mx-auto border-8 border-white  shadow-lg hover:shadow-xl  transition ease-in-out duration-700 rounded-full">

                        <img className=" inner-img  "
                            alt="hero"
                            src="./Images/personal/female-programmer.jpeg"
                        />
                    </div>
                    <div class="absolute w-full top-0 z-10 mx-auto">
                        <img
                            className="w-full "
                            alt="hero"
                            src="./Images/personal/img-bg.png"
                        />
                    </div>

                </div>
                <div className="md:flex-1  md:order-1 flex-initial md:pl-24 flex-initial w-full flex h-full mb-20">

                    <p className="lg:w-5/6 text-xl leading-relaxed text-left text-base">
                        <span className="font-medium text-2xl">Hello!</span>     My name is Zara and I enjoy creating things that live on the internet.
                        I've had the privilege of working at a web studio, a start-up, and a student-led design studio. 
                        My main focus these days is building accessible, inclusive products and digital experiences at
                        <a className="underline text-red-450 cursor-pointer">Blue Lion web studio</a> for a variety of clients.
         </p>
                </div>

            </div>
        </section>
    );
}