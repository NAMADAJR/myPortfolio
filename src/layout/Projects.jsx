import React from "react";
import { projects } from "../components/projectsData";
import ProjectCard from "../components/ProjectCard";
import ProjectVid from "../components/ProjectVid";

const Projects = () => {
  return (
    <div className="min-h-screen md:p-10 lg:p-[70px]">
      <div className="flex items-center justify-center mb-10"> 
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-rust-brown font-bold">
          My Projects
        </h1>
        <ProjectVid />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((_, index) => (
          <ProjectCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

