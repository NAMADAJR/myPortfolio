import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

const Profilepic = () => {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, x: 100 }} // Start hidden and shifted to the right
      animate={{ opacity: 1, x: 0 }}   // Fade in and slide to position
      transition={{ duration: 5 }}     // Duration of the animation
    >
      <img
        src="https://ik.imagekit.io/po14ul1dat/namz-removebg.png?updatedAt=1733925838571"
        alt="Profile Picture"
        className="w-[330px] shadow-md hover:scale-110 transition-transform duration-1000"
      />
    </motion.div>
  );
};

export default Profilepic;
