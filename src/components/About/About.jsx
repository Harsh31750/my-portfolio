import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";
import Reveal from "../Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>
          </Reveal>

          {/* Name */}
          <Reveal delay={0.3}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Harshit Singh
            </h2>
          </Reveal>

          {/* Skills Heading with Typing Effect */}
          <Reveal delay={0.5}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  "SOFTWARE ENGINEER",
                  "Fullstack Developer",
                  "Web Developer",
                  "App Developer",
                  "UI/UX Designer",
                  "Coder",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </h3>
          </Reveal>

          {/* About Me Paragraph */}
          <Reveal delay={0.7}>
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
              I’m a CSE graduate from NIT Silchar, A Software Engineer with 2+
              years of experience in building scalable, efficient web
              applications. Proficient in front-end and back-end development, I
              have a strong grasp of C++, data structures, and algorithms. My
              expertise includes web and mobile app development (Android/iOS),
              AI/ML, and other modern technologies — enabling seamless user
              experiences and effective solutions. I’m passionate about emerging
              technologies and continuously evolving as a Software Engineer.
            </p>
          </Reveal>

          {/* Resume Button */}
          <Reveal delay={0.9}>
            <a
              href="https://drive.google.com/file/d/1dw2vcC3fkoyrvvNu3yBF3SmGXPjd-mro/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
          </Reveal>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Reveal delay={1.1}>
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Harshit Singh"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
