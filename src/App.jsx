import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Preloader from "./layout/Preloader";
import Home from "./layout/Home";
import About from "./layout/About";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Navbar from "./layout/Navbar";
import './App.css'

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3700);
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
                    {/* Gradient Background Layer */}
                    <div className="gradient-bg"></div>
                    <Navbar />
                    <div id="home" className="min-h-screen bg-transparent">
                        <Home />
                    </div>
                    <div id="about" className="min-h-screen bg-transparent">
                        <About />
                    </div>
                    <div id="projects" className="min-h-screen bg-transparent">
                        <Projects />
                    </div>
                    <div id="contact" className="min-h-screen bg-transparent">
                        <Contact />
                    </div>
                </div>
            )}
        </Router>
    );
};

export default App;
