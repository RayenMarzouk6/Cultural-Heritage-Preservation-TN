import React from "react";
import { FaRegLightbulb, FaCogs, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "AI-Based Restoration",
    description: "Using AI to reconstruct and restore ancient artifacts digitally.",
    icon: <FaRegLightbulb className="text-blue-500 text-4xl" />,
  },
  {
    title: "3D Virtual Tours",
    description: "Explore Tunisia's heritage sites in immersive 3D virtual experiences.",
    icon: <FaCogs className="text-blue-500 text-4xl" />,
  },
  {
    title: "Digital Archives",
    description: "Preserving historical data in secure digital formats for future generations.",
    icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-2 text-gray-600">Innovative solutions to preserve and explore cultural heritage.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
