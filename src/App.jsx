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
        const timer = setTimeout(() => setLoading(false), 4000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            {loading ? (
                <Preloader />
            ) : (
                <div className="transition-opacity duration-500 opacity-100">
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
