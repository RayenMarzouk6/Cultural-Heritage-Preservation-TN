import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-300 to-white px-6 overflow-hidden">
      {/* Background Images */}
      <img 
        src="./image/hero/top-left.png"
        alt="Ancient Ruins"
        className="absolute top-10 left-0"
      />
      <img 
        src="/image/hero/top-right.png" 
        alt="Colosseum"
        className="absolute top-10 right-0"
      />
      <img 
        src="/image/hero/buttom-left.png" 
        alt="Mosque"
        className="absolute bottom-10 left-0"
      />
      <img 
        src="/image/hero/buttom-right.png" 
        alt="Old Fortress"
        className="absolute bottom-10 right-0"
      />

      {/* Hero Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Preserving Tunisia’s Cultural Heritage with Innovation
      </h1>
      <p className="mt-4 text-lg text-gray-600 italic max-w-2xl">
        Engineering the future with{" "}
        <span className="text-blue-600 font-semibold">AI & Technology</span> 
        to protect our past. Explore, Restore, and Engage with{" "}
        <span className="text-red-500 font-semibold">Tunisia’s</span> rich cultural history.
      </p>
      <div>
      <img src="image/hero/chachia.png" alt="chachia" className="absolute w-20 left-1/2 top-1/2" />
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
        Get Started
      </button>
      </div>
    </section>
  );
};

export default Hero;
