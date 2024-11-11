import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">
        Hello, I’m [Your Name]
      </h1>
      <p className="text-2xl mb-8">
        I’m a [Your Profession] specializing in [your skills or interests].
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