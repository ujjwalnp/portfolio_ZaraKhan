import React from "react";
export default function About() {

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Zara.
                <br className="hidden lg:inline-block" />I love to build amazing apps and websites.
              </h1>
              <p className="mb-8 leading-relaxed">
              A Strongly seasoned and hard-working Web Developer with creative thinking and project design abilities and provides strong attention to detail and design quality. <br/>
              I have Working experience of web applications, programming languages, and web services, such as APIs, CSS, CSS3, cross-browser compatibility, HTML, HTML5, JavaScript, JQuery, PHP, security principles, REST, SOAP, web user interface design (UI) and content management systems e.g. WordPress, OctoberCMS etc.<br/> 
              I am Experienced in implementing and using modern web development workflows and operations using a variety of tools including GitHub. <br/>Proficient in graphic design software including Adobe Photoshop, Adobe Illustrator, and other visual design tools.<br/>
              I am a highly motivated and strong engineering professional with an ability to work with a team or individually when needed.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );


}
 