import React from "react";
import { education } from "../../constants";
import Reveal from "../Reveal";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] sm:px-[8vw] md:px-[10vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            My education has been a journey of learning and development. Here are the details of my academic background
          </p>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <Reveal key={edu.id} delay={0.2 + index * 0.1}>
            <div
              className={`relative mb-24 flex flex-col sm:flex-row items-center gap-6 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 rounded-full z-10 flex items-center justify-center">
                <img src={edu.img} alt={edu.school} className="w-full h-full object-cover rounded-full" />
              </div>

              {/* Content Card */}
              <div
                className={`w-full sm:w-1/2 bg-gray-900 border border-white shadow-2xl backdrop-blur-md p-6 rounded-2xl transform transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                    <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
