import React from 'react';
import RotatingText from './Components/RotatingText'; 
import Typewriter from './Components/Typewriter';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">
        Hello, I’m Joseph Wicorek
      </h1>
      <p className="text-2xl mb-8">
        <div>  
         <Typewriter /> 
         </div>
      </p>
      <a
        href="#projects"
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
      >
        See My Work
      </a>
    </section>
  );
};

export default Hero;