import React from "react";
import TypingEffect from "react-typing-effect";

const Typewriter = () => {
  return (
    <div className="w-full text-center text-lg text-rust-brown px-4 py-2">
      <TypingEffect
        text={[
          "I am a fullstack Web developer.",
          "Innovating through code.",
          "Avid gamer and tech enthusiast.",
        ]}
        speed={90}
        eraseDelay={1000}
        typingDelay={500}
      />
    </div>
  );
};

export default Typewriter;
