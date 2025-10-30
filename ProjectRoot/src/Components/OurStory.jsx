import React from "react";
import StoryImg from "../assets/HeroImg.jpg"; // Replace with your image

const OurStory = () => {
  return (
    <section className="relative bg-[#03040C] text-white py-20 px-6 md:px-20">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-blue-400">Story</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            At Home of Innovation, we started with a vision to blend creativity and technology.
            Over the years, our passion has grown into crafting digital solutions that empower businesses
            and transform ideas into reality.
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            From small startups to large enterprises, our journey is driven by innovation,
            dedication, and a commitment to excellence.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 py-3 px-8 rounded-full font-semibold shadow-lg transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="relative w-full max-w-md h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl border border-blue-500 hover:shadow-2xl transition-all duration-700">
            <img
              src={StoryImg}
              alt="Our Story"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011E5F]/70 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

