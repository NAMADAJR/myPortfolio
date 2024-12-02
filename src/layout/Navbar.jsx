import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling

const Navbar = () => {
    return (
        <nav className="p-4 fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <NavLink to="/" className="text-rust-brown">
                        MyPortfolio
                    </NavLink>
                </div>
                <div className="space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-sand-tan font-bold"
                                : "text-rust-brown hover:text-sand-tan transition-colors duration-300"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-sand-tan font-bold"
                                : "text-rust-brown hover:text-sand-tan transition-colors duration-300"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive
                                ? "text-sand-tan font-bold"
                                : "text-rust-brown hover:text-sand-tan transition-colors duration-300"
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-sand-tan font-bold"
                                : "text-rust-brown hover:text-sand-tan transition-colors duration-300"
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
