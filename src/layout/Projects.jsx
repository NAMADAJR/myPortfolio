import React from "react";
import { projects } from "../components/projectsData"; 
import ProjectCard from "../components/ProjectCard"; 

const Projects = () => {
    return (
        <div className="min-h-screen md:p-10 lg:p-[90px]">
            <h1 className="text-4xl text-rust-brown font-bold text-center mb-10">My Projects</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((_, index) => (
                    <ProjectCard key={index} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
