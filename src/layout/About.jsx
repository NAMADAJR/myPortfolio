import React from "react";
import MyBio from "../components/MyBio";
import SkillsCarousel from "../components/SkillsCarousel";
import AboutVid from "../components/AboutVid";

const About = () => {
  return (
    <div className="text-white min-h-screen md:p-10 lg:p-[70px]">
      <div className="flex items-center justify-center gap-2 mb-5"> 
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rust-brown">
          About Me
        </h1>
        <AboutVid />
      </div>

      <MyBio />
      <SkillsCarousel />
    </div>
  );
};

export default About;


