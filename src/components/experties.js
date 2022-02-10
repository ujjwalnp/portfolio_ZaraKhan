// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

export default function Experties() {
  return (
    <section id="skills" className="text-gray-700  ">
      <Fade top duration={1000}>
        {" "}
        <h1 className="md:text-6xl text-4xl font-medium text-center title-font mb-4 ">
          Skills &amp; Experties
        </h1>
      </Fade>
      <div className="w-full md:px-0 px-5 pt-10 mx-auto">
        <div className="flex flex-wrap lg:w-4/5 mx-auto w-full">
          <Slide left cascade duration={1000}>
            {" "}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <Fade left duration={2000}>
                  <p className="text-xl px-2 py-4 font-medium w-full text-left">
                    Languages & Libraries
                  </p>
                </Fade>
                <Fade cascade delay={500} duration={1000}>
                  <div className="md:grid-cols-1 grid grid-cols-2 ">
                    {skills
                      .filter((skill) => skill.type === "A")
                      .map((skillA) => (
                        <div className="p-2 w-full">
                          <div className="flex py-1 md:py-2 h-full items-center">
                            {/* { <BadgeCheckIcon className="text-red-400 w-4 h-4 flex-shrink-0 mr-4" /> } */}
                            <img
                              alt="icon"
                              className="w-4 h-4 lex-shrink-0 mr-4"
                              src={skillA.icon}
                            />
                            <span className="title-font font-medium ">
                              {skillA.name}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </Fade>{" "}
              </div>
              <div>
                <Fade left duration={2000}>
                  <p className="text-xl px-2 py-4  font-medium w-full  text-left">
                    Frameworks & CMS
                  </p>
                </Fade>
                <Fade cascade delay={500} duration={1000}>
                  <div className="md:grid-cols-1 grid grid-cols-2 ">
                    {skills
                      .filter((skill) => skill.type === "B")
                      .map((skillB) => (
                        <div className="p-2   w-full">
                          <div className="  flex py-1 md:py-2 h-full items-center">
                            {/* { <BadgeCheckIcon className="text-red-400 w-4 h-4 flex-shrink-0 mr-4" /> } */}
                            <img
                              alt="icon"
                              className="w-4 h-4 lex-shrink-0 mr-4"
                              src={skillB.icon}
                            />
                            <span className="title-font font-medium ">
                              {skillB.name}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>{" "}
                </Fade>
              </div>
              <div>
                <Fade left duration={2000}>
                  <p className="text-xl px-2 py-4  font-medium w-full  text-left">
                    Tools
                  </p>
                </Fade>
                <Fade cascade delay={500} duration={1000}>
                  <div className="md:grid-cols-1 grid grid-cols-2 ">
                    {skills
                      .filter((skill) => skill.type === "C")
                      .map((skillC) => (
                        <div className="p-2   w-full">
                          <div className="  flex py-2  h-full items-center">
                            {/* { <BadgeCheckIcon className="text-red-400 w-4 h-4 flex-shrink-0 mr-4" /> } */}
                            <img
                              alt="icon"
                              className="w-4 h-4 lex-shrink-0 mr-4"
                              src={skillC.icon}
                            />
                            <span className="title-font font-medium ">
                              {skillC.name}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </Fade>
              </div>
              <div>
                <Fade left duration={2000}>
                  <p className="text-xl px-2 py-4  font-medium w-full  text-left">
                    Design
                  </p>
                </Fade>
                <Fade cascade delay={500} duration={1000}>
                  <div className="md:grid-cols-1 grid grid-cols-2 ">
                    {skills
                      .filter((skill) => skill.type === "D")
                      .map((skillD) => (
                        <div className="p-2  w-full">
                          <div className="  flex py-1 md:py-2 h-full items-center">
                            {/* { <BadgeCheckIcon className="text-red-400 w-4 h-4 flex-shrink-0 mr-4" /> } */}
                            <img
                              alt="icon"
                              className="w-4 h-4 lex-shrink-0 mr-4"
                              src={skillD.icon}
                            />
                            <span className="title-font font-medium ">
                              {skillD.name}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </Fade>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
