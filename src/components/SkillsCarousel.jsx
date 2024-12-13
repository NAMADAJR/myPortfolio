import React from "react";
import Slider from "react-slick"; // Importing react-slick
import "slick-carousel/slick/slick.css"; // Importing slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Importing slick carousel theme CSS

const SkillsCarousel = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For very small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-center text-2xl font-bold mb-6 text-rust-brown">Skills & Interests</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 shadow-md rounded-lg bg-gray-800 text-white h-28"
          >
            <span className="text-xl font-semibold">{skill}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsCarousel;
