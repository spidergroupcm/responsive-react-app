import React from 'react';

const Banner = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-700 to-purple-900">
      <div className="max-w-5xl mx-auto text-center p-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Discover Your Potential
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Join us on a journey to explore the best of technology and innovation. 
          Unlock opportunities and enhance your skills.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white transition duration-300 font-semibold rounded-lg py-3 px-6 mr-4"
          >
            Get Started
          </a>
          <a
            href="#"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-purple-700 transition duration-300 font-semibold rounded-lg py-3 px-6"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
