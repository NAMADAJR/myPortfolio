import React from 'react';
import TypingEffect from 'react-typing-effect';

const Typwriter = () => {
  return (
    <div className="flex justify-center w-full text-center text-1xl text-rust-brown px-4 py-2">
      <TypingEffect 
        text={['I am a fullstack Web developer.', 'Innovating through code.', 'Avid gamer and tech enthusiast.']}
        speed={90} 
        eraseDelay={1000} 
        typingDelay={500}
      />
    </div>
  );
}

export default Typwriter;

