// src/pages/About.jsx
import React from "react";
import MyBio from "../components/MyBio";
import SkillsCarousel from "../components/SkillsCarousel";  

const About = () => {
  return (
    <div className="text-white bg-black h-screen p-5 md:p-10 lg:p-[90px]">
      <h1 className="flex justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-rust-brown mb-5">
        About Me
      </h1>
      
      {/* Bio Section */}
      <MyBio />
      
      {/* Skills section */}
      <SkillsCarousel /> 
    </div>
  );
};

export default About;

