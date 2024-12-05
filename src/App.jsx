import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./layout/Preloader";
import Home from "./layout/Home";
import About from "./layout/About";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Navbar from "./layout/Navbar";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3700); // Preloader delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            {loading ? (
                <div className="preloader-wrapper">
                    <Preloader />
                </div>
            ) : (
                <div className="fade-in-content">
                    <Navbar />
                    <div id="home" className="min-h-screen bg-jet-black">
                        <Home />
                    </div>
                    <div id="about" className="min-h-screen bg-jet-black">
                        <About />
                    </div>
                    <div id="projects" className="min-h-screen bg-jet-black">
                        <Projects />
                    </div>
                    <div id="contact" className="min-h-screen bg-jet-black">
                        <Contact />
                    </div>
                </div>
            )}
        </Router>
    );
};

export default App;

