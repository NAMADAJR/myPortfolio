import React from "react";
import "./Preloader.css";  // Import the CSS file for animations

const Preloader = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
            <p className="wave-animation mt-4 text-rust-brown text-4xl font-bold">
                Welcome😄
            </p>
        </div>
    );
};

export default Preloader;



