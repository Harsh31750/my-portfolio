import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import Reveal from "../Reveal";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">

        {/* Name / Logo */}
        <Reveal delay={0.1}>
          <h2 className="text-xl font-semibold text-purple-500">Harshit Singh</h2>
        </Reveal>

        {/* Navigation Links - Responsive */}
        <Reveal delay={0.2}>
          <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "work" },
              { name: "Education", id: "education" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="hover:text-purple-500 text-sm sm:text-base my-1"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </Reveal>

        {/* Social Media Icons - Responsive */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center space-x-4 mt-6">
            {[
              { icon: <FaFacebook />, link: "https://www.facebook.com/kumarharshit.singh.33" },
              { icon: <FaTwitter />, link: "https://twitter.com/harsh31750" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kr-harshit-singh-a0a1a9200/" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/harsh_82520" },
              { icon: <FaYoutube />, link: "https://www.youtube.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </Reveal>

        {/* Copyright Text */}
        <Reveal delay={0.4}>
          <p className="text-sm text-gray-400 mt-6">
            © 2025 Harshit Singh. All rights reserved.
          </p>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
