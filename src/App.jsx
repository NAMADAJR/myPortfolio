import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./layout/Preloader";
import Home from "./layout/Home";
import About from "./layout/About";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Navbar from "./layout/Navbar"; // Import the Navbar

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 4000); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            {loading ? (
                <Preloader />
            ) : (
                <div className="transition-opacity duration-500 opacity-100">
                    <Navbar /> {/* Render Navbar here */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            )}
        </Router>
    );
};

export default App;
