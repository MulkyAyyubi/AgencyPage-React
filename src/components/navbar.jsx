import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  return (
    <nav className="shadow-md mx-auto px-64 fixed top-0 inset-x-0 z-50">
      <div className="mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-white">
          Enver
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <a href="#hero" className="text-white font-[Nunito Sans] hover:text-indigo-500">Home</a>
          <a href="#projects" className="text-white hover:text-indigo-500">Projects</a>
          <a href="#services" className="text-white hover:text-indigo-500">Services</a>
          <a href="#about" className="text-white hover:text-indigo-500">About Us</a>
        </div>
          <a href="#contact" className="bg-indigo-500 hover:bg-indigo-300 px-8 py-2 rounded-lg hidden md:flex text-white hover:text-indigo-500">Contact Us</a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-50 shadow-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#hero"
          className="block px-6 py-2 text-white hover:text-gray-800 hover:bg-gray-100"
        >
          Home
        </a>
        <a
          href="#projects"
          className="block px-6 py-2 text-white hover:text-gray-800 hover:bg-gray-100"
        >
          Projects
        </a>
        <a
          href="#about"
          className="block px-6 py-2 text-white hover:text-gray-800 hover:bg-gray-100"
        >
          Services
        </a>
        <a
          href="#footer"
          className="block px-6 py-2 text-white hover:text-gray-800 hover:bg-gray-100"
        >
          About Us
        </a>
        <a
          href="#footer"
          className="block px-6 py-2 text-white hover:text-gray-800 hover:bg-gray-100"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
