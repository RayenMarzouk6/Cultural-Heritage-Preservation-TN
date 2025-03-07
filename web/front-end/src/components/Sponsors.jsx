import React from "react";

const Sponsors = () => {
  return (
    <section className="w-full bg-gray-100 py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Sponsors
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-8 animate-scroll">
          <img src="/assets/sponsors/logo1.png" alt="Sponsor 1" className="w-32 h-20 grayscale" />
          <img src="/assets/sponsors/logo2.png" alt="Sponsor 2" className="w-32 h-20 grayscale" />
          <img src="/assets/sponsors/logo3.png" alt="Sponsor 3" className="w-32 h-20 grayscale" />
          <img src="/assets/sponsors/logo4.png" alt="Sponsor 4" className="w-32 h-20 grayscale" />
          <img src="/assets/sponsors/logo5.png" alt="Sponsor 5" className="w-32 h-20 grayscale" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
