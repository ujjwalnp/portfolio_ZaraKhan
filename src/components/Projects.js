import React from "react";
import { projects } from "../data";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <section id="projects">
      <p className="py-16 "></p>
      <div className=" w-full px-4 lg:px-0  ">
        <Fade top duration={1000}>
          {" "}
          <h1 className="md:text-6xl  text-gray-700 text-4xl font-medium text-center title-font   ">
            {/* Some projects i've worked on */}
            Some things I’ve built
          </h1>
        </Fade>
        {projects.map((projects) => (
          <div className="  hidden sm:flex relative lg:w-3/4 w-full  items-center mx-auto mt-32">
            <Slide left cascade duration={1000}>
              {" "}
              <div className="absolute  w-3/6  left-0 z-20 ">
                <div>
                  {" "}
                  <a
                    className="text-red-400 w-3/4 text-2xl pointer font-medium transition ease-in-out duration-500 hover:underline"
                    href={projects.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projects.title}
                  </a>
                </div>
                <p className="text-base text-gray-600 ">{projects.subtitle}</p>
                <div className="  bg-white border rounded-lg p-6 border-gray-200 text-gray-700 w-full my-8 h-auto shadow-xl">
                  {projects.description}{" "}
                </div>
                <p class="text-gray-600 text-sm w-3/4">
                  {projects.tags.map((x) => (
                    <span className="text-gray-600 pr-4" key={x.tag}>
                      {x.tag}
                    </span>
                  ))}
                </p>
              </div>
            </Slide>

            <Zoom duration={2000}>
              <div>
                <a
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="z-10   img-gradient   ">
                    <img
                      className=" rounded-lg relative transition ease-in-out duration-700 inline-block shadow-lg "
                      alt=" website"
                      src={projects.image}
                    />
                  </div>{" "}
                </a>
              </div>{" "}
            </Zoom>
          </div>
        ))}

        {projects.map((projects) => (
          <Slide left cascade duration={1000}>
            {" "}
            <div className="sm:hidden mt-16 block w-full">
              <img
                className="   mb-6 rounded-lg shadow-lg "
                alt="website"
                src={projects.image}
              />
              <div>
                <a
                  className="text-red-400  text-xl pointer font-medium transition ease-in-out duration-500 hover:underline"
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projects.title}
                </a>
              </div>
              <p className="text-base text-gray-600 ">{projects.subtitle}</p>

              <p className="   py-4  text-gray-700 w-full  ">
                {projects.description}{" "}
              </p>
              <p class="text-gray-600 text-sm w-3/4">
                {projects.tags.map((x) => (
                  <span className="text-gray-600 pr-4" key={x.tag}>
                    {x.tag}
                  </span>
                ))}
              </p>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
}
