import React from "react";
import MyName from "../components/MyName";
import ProfilePic from "../components/Profilepic";
import Typewriter from "../components/Typewriter";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center bg-black min-h-screen items-center md:p-10 lg:p-[90px]">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center text-center lg:w-1/2">
        <MyName />
        <Typewriter />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-center">
        <ProfilePic />
      </div>
    </div>
  );
};

export default Home;
