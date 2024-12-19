import React from "react";

const MyBio = () => {
  return (
    <div>
      {/* Bio Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="flex justify-center text-xl md:text-2xl lg:text-3xl font-semibold text-rust-brown mb-3">
            Who I Am
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-center md:text-left">
            I am a passionate full-stack web developer specializing in creating
            dynamic and responsive websites. I enjoy coding, problem-solving, and
            bringing ideas to life through technology.
          </p>
        </div>

        {/* Quote Section */}
        <div className="flex-1 flex justify-center items-center text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-rust-brown italic">
            “Simplicity is the essence of good design.”
          </p>
        </div>
      </div>

      {/* My Journey Section */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-rust-brown mb-3">My Journey</h3>
          <p className="p-1 text-center">Started learning HTML/CSS in June, 2024</p>
          <p className="p-1 text-center">Built my first website in July, 2024</p>
          <p className="p-1 text-center">Started working with React and Tailwind CSS in August, 2024</p>
          <p className="p-1 text-center">Learned Python and Flask in , 2024</p>
          <p className="p-1 text-center">Developed several personal and group projects</p>
        
      </div>
    </div>
  );
};

export default MyBio;
