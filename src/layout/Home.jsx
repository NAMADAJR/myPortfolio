import React from "react";
import Typwriter from "../components/Typwriter";
import Profilepic from "../components/Profilepic";
import MyName from "../components/MyName"; 

const Home = () => {
  return (
    <div className="flex justify-center items-center p-5 m-8">
      <div className="p-10 text-center">
        {/* Animated Name */}
        <MyName />

        {/* Typwriter Text */}
        <Typwriter />
      </div>

      {/* Profile Picture */}
      <div className="m-10">
        <Profilepic />
      </div>
    </div>
  );
};

export default Home;




