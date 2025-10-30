import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import HeroImg from "../assets/HeroImg.jpg";
import InnovationImg from "../assets/InnovationTeam.jpg"; // right-side image

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

     const linkClass = ({ isActive }) =>
    isActive
      ? "relative text-blue-400 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:left-0 after:-bottom-1"
      : "text-gray-200 hover:text-blue-300 hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-blue-300 hover:after:left-0 hover:after:-bottom-1 transition duration-300 relative";

  
  return (
    <nav className="bg-gradient-to-r from-[#011E5F] to-[#020C3A] shadow-lg fixed top-0 w-full z-50">
      <div className="flex items-center justify-between max-w-[1300px] mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={HeroImg} alt="HIN" className="w-12 h-12 rounded-full border-2 border-blue-400" />
          <p className="font-extrabold text-[28px] text-white tracking-wide">NFI<span className="text-blue-400">.</span></p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/portfolio" className={linkClass}>Portfolio</NavLink></li>
          <li><NavLink to="/services" className={linkClass}>Services</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          <li><NavLink to="/blog" className={linkClass}>Blog</NavLink></li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-semibold shadow-md transition duration-300">
          Hire Us
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={handleNav}>
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-0 left-0 h-screen w-[70%] bg-[#020C3A]/95 backdrop-blur-md p-6 pt-20 transform transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-6 text-white text-lg font-medium">
          <li><NavLink to="/" className={linkClass} onClick={handleNav}>Home</NavLink></li>
          <li><NavLink to="/portfolio" className={linkClass} onClick={handleNav}>Portfolio</NavLink></li>
          <li><NavLink to="/services" className={linkClass} onClick={handleNav}>Services</NavLink></li>
          <li><NavLink to="/about" className={linkClass} onClick={handleNav}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClass} onClick={handleNav}>Contact</NavLink></li>
          <li><NavLink to="/blog" className={linkClass} onClick={handleNav}>Blog</NavLink></li>
        </ul>
        <div className="mt-10">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full font-semibold shadow-md transition duration-300">
            Hire Us
          </button>
        </div>
      </div>
    </nav>
    
  );
  
}

export default Header;
