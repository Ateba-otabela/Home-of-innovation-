import React, { useState } from "react";
import InnovationImg from "../assets/InnovationTeam.jpg"; // right-side image
import webAppImg from "../assets/webApp.jpg"; 
import webAppImg1 from "../assets/webApp1.jpg"; 

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback:
      "Next Future Intervention transformed our digital presence. The team is creative, skilled, and extremely professional.",
    image: InnovationImg, // replace with your assets
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Founder, StartupX",
    feedback:
      "Amazing experience! The web and mobile solutions provided exceeded our expectations and helped us grow.",
    image: webAppImg,
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Marketing Head, FinTechCo",
    feedback:
      "Professional, timely, and creative. The team really understood our vision and delivered a perfect solution.",
    image: webAppImg1,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#03040C] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="max-w-3xl mx-auto bg-[#0D0D0F] rounded-xl p-8 shadow-lg text-center relative">
        <p className="text-gray-300 italic mb-6">"{current.feedback}"</p>
        <div className="flex items-center justify-center space-x-4">
          <img
            src={current.image}
            alt={current.name}
            className="w-16 h-16 rounded-full border-2 border-blue-400"
          />
          <div>
            <h3 className="text-xl font-semibold">{current.name}</h3>
            <p className="text-blue-400 text-sm">{current.role}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            className="text-white text-2xl font-bold hover:text-blue-400 transition"
            onClick={prevTestimonial}
          >
            &#8249;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            className="text-white text-2xl font-bold hover:text-blue-400 transition"
            onClick={nextTestimonial}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
