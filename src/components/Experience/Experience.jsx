import React from "react";
import { experiences } from "../../constants";
import Reveal from "../Reveal";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[6vw] sm:px-[8vw] md:px-[10vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A collection of my work experience and the roles I have taken in various organizations
          </p>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {experiences.map((exp, index) => (
          <Reveal key={exp.id} delay={0.2 + index * 0.1}>
            <div
              className={`relative mb-24 flex flex-col sm:flex-row items-center gap-6 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 rounded-full z-10 flex items-center justify-center">
                <img src={exp.img} alt={exp.company} className="w-full h-full object-cover rounded-full" />
              </div>

              {/* Content Card */}
              <div
                className={`w-full sm:w-1/2 bg-gray-900 border border-white shadow-2xl backdrop-blur-md p-6 rounded-2xl transform transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img src={exp.img} alt={exp.company} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <h4 className="text-sm text-gray-300">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400">{exp.desc}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {exp.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
