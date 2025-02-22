import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsCarousel = () => {
  const skills = ["HTML", "CSS", "JavaScript", "Git and Github", "React", "Tailwind CSS", "Vercel", "Python", "Flask", "SQL", "Render"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,  
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-rust-brown">
        Skills & Technologies
      </h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center shadow-lg rounded-lg bg-jet-black h-10 hover:scale-105 transition-transform duration-300"
          >
            <span className="flex justify-center text-xl font-semibold text-rust-brown ">{skill}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsCarousel;
