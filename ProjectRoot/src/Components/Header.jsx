import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import HeroImg from "../assets/HeroImg.jpg";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="text-white bg-[#011E5F] h-16 w-full relative">
      <div className="flex items-center justify-between max-w-[1380px] mx-auto px-4 h-full w-full">
        {/* Image/Logo */}
        <div className="flex items-center">
          <img src={HeroImg} alt="HIN" className="w-12 h-12 rounded-full" />
          <p className="font-bold text-[40px] ml-2">DB</p>
        </div>

        {/* Links for large screens */}
        <ul className="hidden md:flex space-x-4 mx-auto">
          <li className="p-2 cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#020915] border-b-2 border-blue-[#020915] font-bold"
                  : "text-[#DEDEDE] hover:text-blue-500 transition duration-200 font-medium"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p-2 cursor-pointer">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "text-[#020915] border-b-2 border-blue-[#020915] font-bold"
                  : "text-[#DEDEDE] hover:text-blue-500 transition duration-200 font-medium"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="p-2 cursor-pointer">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-[#020915] border-b-2 border-blue-[#020915] font-bold"
                  : "text-[#DEDEDE] hover:text-blue-500 transition duration-200 font-medium"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="p-2 cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#020915] border-b-2 border-blue-[#020915] font-bold"
                  : "text-[#DEDEDE] hover:text-blue-500 transition duration-200 font-medium"
              }
            >
              About
            </NavLink>
          </li>
          <li className="p-2 cursor-pointer">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#020915] border-b-2 border-blue-[#020915] font-bold"
                  : "text-[#DEDEDE] hover:text-blue-500 transition duration-200 font-medium"
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="p-2 cursor-pointer">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-[#020915] border-b-2 border-blue-[#020915] font-bold"
                  : "text-[#DEDEDE] hover:text-blue-500 transition duration-200 font-medium"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Contact Us button for large screens */}
        <button className="hidden md:block bg-[#0D0D0F] text-white py-2 px-8 rounded-full">
          Contact
        </button>

        {/* Menu icon for small screens */}
        <div className="md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          nav ? "left-0" : "-left-full"
        } md:hidden flex flex-col top-18 w-[60%] h-screen bg-black font-bold ease-in-out duration-500 fixed`}
      >
        <ul className="uppercase p-4">
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-blue-500 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-blue-500 transition duration-300"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-blue-500 transition duration-300"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-blue-500 transition duration-300"
              }
            >
              About
            </NavLink>
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-blue-500 transition duration-300"
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:text-blue-500 transition duration-300"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button>Hire Us ?</button>
      </div>
    </div>
  );
};

export default Header;
