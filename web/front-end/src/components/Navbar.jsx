import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-blue-300 shadow-md justify-around items-center space-x-4 fixed top-0 left-0 w-full shadow-md z-50 p-2">
      <div className="text-xl font-bold text-gray-900">Logo</div>
      <ul className="hidden md:flex space-x-6 text-gray-900 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Discover</li>
        <li className="hover:text-blue-600 cursor-pointer">Solutions</li>
        <li className="hover:text-blue-600 cursor-pointer">About Us</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
      <button className="px-4 py-2 bg-white text-gray-900 rounded-md shadow hover:bg-gray-100 transition">
        English
      </button>
    </nav>
  );
};

export default Navbar;
