import React from "react";
import { projects } from "./projectsData"; 

const ProjectCard = ({ index }) => {
    const project = projects[index];

    return (
        <div className="bg-jet-black text-sand-tan p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-sm mb-6">{project.description}</p>
            <div className="flex justify-between mt-auto">
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-rust-brown hover:text-sand-tan transition-colors"
                >
                    View Live
                </a>
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-rust-brown hover:text-sand-tan transition-colors"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;

