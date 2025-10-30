import React from "react";
import HeroImg from "../assets/HeroImg.jpg"; // Replace with your own image
import InnovationImg from "../assets/InnovationTeam.jpg"; // right-side image

const HomePage = () => {
  return (
<section
  className="relative min-h-screen text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 overflow-hidden"
  style={{
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#03040C]/90 via-[#03040C]/60 to-[#03040C]/90 z-0"></div>

  {/* Left content */}
  <div className="relative z-10 flex-1 text-center md:text-left mt-5 space-y-6">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
      Welcome to <span className="text-blue-400">Home of Innovation</span>
    </h1>
    <p className="text-gray-200 text-lg md:text-xl max-w-md mx-auto md:mx-0">
      We blend creativity and technology to craft impactful digital solutions that
      transform your ideas into success.
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/50">
      Learn More
    </button>
  </div>

  {/* Right-side image (hidden on small screens) */}
  <div className="hidden md:flex flex-1 justify-center mt-12 md:mt-0 animate-fadeIn relative z-10">
    <div className="relative w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all duration-700 ease-in-out">
      <img 
        src={InnovationImg}
        alt="Innovation"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#011E5F]/70 via-transparent to-transparent"></div>
    </div>
  </div>
</section>

  );
};

export default HomePage;

