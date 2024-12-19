import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav className="p-4 fixed w-full z-50 shadow-md bg-black">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/#home" smooth className="text-rust-brown">
                        Namada
                    </Link>
                </div>
                <button
                    className="md:hidden text-rust-brown"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
                <div
                    className={`absolute md:static top-full left-0 w-full md:w-auto bg-jet-black md:bg-transparent shadow-md md:shadow-none transition-all duration-600 ease-in-out ${
                        isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 md:opacity-100"
                    } overflow-hidden md:overflow-visible md:flex md:items-center`}
                >
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                        <Link
                            to="/#home"
                            smooth
                            className={getLinkClass("home")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/#about"
                            smooth
                            className={getLinkClass("about")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/#projects"
                            smooth
                            className={getLinkClass("projects")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/#contact"
                            smooth
                            className={getLinkClass("contact")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
