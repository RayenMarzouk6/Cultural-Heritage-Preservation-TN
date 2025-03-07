import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img 
            src="/image/about/tunisia.png" 
            alt="About Us" 
            className="h-auto rounded-lg shadow-lg w-96"
          />
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800">
            About Us
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are dedicated to preserving Tunisia’s cultural heritage through innovation, AI, and technology.
          </p>

          {/* Bullet Points */}
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-center">
              ✅ Promoting **cultural preservation** with modern technology.
            </li>
            <li className="flex items-center">
              ✅ Using **AI & digital tools** to restore historical sites.
            </li>
            <li className="flex items-center">
              ✅ Encouraging **global awareness** of Tunisia’s rich history.
            </li>
            <li className="flex items-center">
              ✅ Partnering with **experts & institutions** for restoration.
            </li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
