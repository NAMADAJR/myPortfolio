import React from "react";
import { motion } from "framer-motion";

const ProfilePic = () => {
  return (
    <div className="m-10">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://ik.imagekit.io/po14ul1dat/namz-removebg.png?updatedAt=1733925838571"
          alt="Profile Picture"
          className="w-[330px] shadow-md hover:scale-110 transition-transform duration-1000"
        />
      </motion.div>
    </div>
  );
};

export default ProfilePic;

