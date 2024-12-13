import React from "react";
import { motion } from "framer-motion"; 

const MyName = () => {
  const introText = "Heyy, I'm "; 
  const shortName = " Namada Junior."; 

  return (
    <div className="flex justify-center space-x-1 p-5">
      {/* Display the intro text */}
      <span className="text-4xl font-bold text-rust-brown">{introText}</span>

      {/* Apply the effect to each letter of the short name */}
      {shortName.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block text-4xl font-bold text-rust-brown"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.5, 1], // Random scale animation for each letter
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: Math.random() * 2, // Random delay for each letter
            ease: "easeInOut",
          }}
        >
          {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
        </motion.span>
      ))}
    </div>
  );
};

export default MyName;
