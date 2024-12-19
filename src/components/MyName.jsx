import React from "react";
import { motion } from "framer-motion";

const MyName = () => {
  const introText = "Heyy, I'm ";
  const shortName = " Namada Junior.";

  return (
    <div className="flex flex-wrap justify-center space-x-1 p-5">
      <span className="text-xl md:text-2xl lg:text-4xl font-bold text-rust-brown">
        {introText}
      </span>
      {shortName.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block text-xl md:text-2xl lg:text-3xl font-bold text-rust-brown"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default MyName;
