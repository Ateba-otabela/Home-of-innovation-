import React from "react";

const AboutUsCard = ({ point }) => {
  return (
    <div className="bg-[#0D0D0F] rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
      <div className="text-5xl mb-4">{point.icon}</div>
      <h3 className="text-xl font-bold mb-2">{point.title}</h3>
      <p className="text-gray-300">{point.description}</p>
    </div>
  );
};

export default AboutUsCard;

