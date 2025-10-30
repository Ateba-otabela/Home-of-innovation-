import React from "react";
import CEOImg from "../assets/InnovationTeam.jpg"; // replace with your CEO image
import { FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const AboutCEO = () => {
  const whatsappNumber = "+237123456789"; // Replace with your number
  const whatsappMessage = "Hello! I would like to connect with you.";

  return (
    <section className="bg-[#03040C] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* CEO Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-lg border-4 border-blue-500 hover:shadow-2xl transition duration-500">
            <img
              src={CEOImg}
              alt="CEO"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* CEO Info */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold">
            Meet Our CEO <span className="text-blue-400">ATEBA OTABELA JEAN PATRICE</span>
          </h2>
          <p className="text-blue-400 font-semibold text-lg">Founder & Visionary</p>
          <p className="text-gray-300 text-lg leading-relaxed">
            ATEBA OTABELA JEAN PATRICE founded Next Future Intervention with a vision to merge creativity and technology. 
            With over 5 years of experience in digital solutions, he has led numerous projects 
            that transformed ideas into successful businesses.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4 text-2xl">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-blue-400 hover:text-blue-500 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
