import React from "react";
import AboutUsCard from "./Cards/AboutUsCard";

// Key points for About Us
const aboutPoints = [
  {
    id: 1,
    title: "Innovative Solutions",
    description:
      "We leverage cutting-edge technology and creative ideas to deliver unique digital solutions.",
    icon: "💡", // You can replace with an actual icon/image
  },
  {
    id: 2,
    title: "Expert Team",
    description:
      "Our team consists of highly skilled professionals passionate about building impactful projects.",
    icon: "👥",
  },
  {
    id: 3,
    title: "Client-Focused",
    description:
      "We prioritize our clients’ needs, ensuring every project aligns with their vision and goals.",
    icon: "🎯",
  },
  {
    id: 4,
    title: "Reliable & Scalable",
    description:
      "Our solutions are designed to grow with your business, maintaining high performance and reliability.",
    icon: "⚡",
  },
];

const AboutUsSection = () => {
  return (
    <section className="bg-[#03040C] text-white py-20 px-6 md:px-20">
      <div className="max-w-[1300px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-blue-400">Us</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          We combine creativity, technology, and dedication to deliver exceptional digital experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutPoints.map((point) => (
            <AboutUsCard key={point.id} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
