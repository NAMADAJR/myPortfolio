import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"];
            let currentSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLinkClass = (section) =>
        activeSection === section
            ? "text-sand-tan font-bold"
            : "text-rust-brown hover:text-sand-tan transition-colors duration-300";

    return (
        <nav className="p-4 fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/#home" smooth className="text-rust-brown">
                        Namada
                    </Link>
                </div>
                <div className="space-x-6">
                    <Link to="/#home" smooth className={getLinkClass("home")}>
                        Home
                    </Link>
                    <Link to="/#about" smooth className={getLinkClass("about")}>
                        About
                    </Link>
                    <Link to="/#projects" smooth className={getLinkClass("projects")}>
                        Projects
                    </Link>
                    <Link to="/#contact" smooth className={getLinkClass("contact")}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
