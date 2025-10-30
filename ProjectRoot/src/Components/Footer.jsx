import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020C3A] text-white py-12 px-6 md:px-20">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-3 gap-8">
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Home of Innovation</h3>
          <p className="text-gray-300">
            Crafting innovative digital solutions with creativity and technology. Let’s build something amazing together.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-blue-400">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="/portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            <li><a href="/blog" className="hover:text-blue-400 transition">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-blue-400">Contact</h4>
          <p className="text-gray-300">123 Innovation Lane, Yaoundé, Cameroon</p>
          <p className="text-gray-300">Email: contact@homeofinnovation.com</p>
          <p className="text-gray-300">Phone: +237 6XX XXX XXX</p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Home of Innovation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

