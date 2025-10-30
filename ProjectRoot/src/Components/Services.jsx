import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive, and high-performance web applications tailored to your business needs.",
    icon: <FaLaptopCode className="text-blue-400 text-4xl" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Developing native and cross-platform mobile applications with smooth UX and top performance.",
    icon: <FaMobileAlt className="text-blue-400 text-4xl" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting visually stunning and user-friendly designs to ensure your users love your product.",
    icon: <FaPaintBrush className="text-blue-400 text-4xl" />,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Providing complete e-commerce platforms with shopping cart, payment gateway, and inventory management.",
    icon: <FaShoppingCart className="text-blue-400 text-4xl" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#03040C] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0D0D0F] p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
