import React, { useState } from "react";
import InnovationImg from "../assets/InnovationTeam.jpg"; // right-side image


const projects = [
  {
    title: "E-Learning Platform",
    description:
      "A web application for online learning, featuring course creation, user authentication, and progress tracking.",
    image: InnovationImg,
  },
  {
    title: "Personal Finance Manager",
    description:
      "A mobile app for tracking expenses, creating budgets, and setting financial goals.",
    image: InnovationImg,
  },
  {
    title: "Weather Forecast App",
    description:
      "A web application that provides current and forecasted weather conditions for locations worldwide.",
    image: InnovationImg,
  },
  {
    title: "Social Media Dashboard",
    description:
      "A web application for managing social media accounts, scheduling posts, and tracking engagement metrics.",
    image: InnovationImg,
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website with product management, shopping cart, and payment gateway integration.",
    image: InnovationImg,
  },
  {
    title: "Task Management Tool",
    description:
      "A web application for creating, assigning, and tracking tasks and projects.",
    image: InnovationImg,
  },
  {
    title: "Recipe Book App",
    description: "A mobile app for discovering, saving, and sharing recipes.",
   image: InnovationImg,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal website showcasing projects, skills, and experience.",
    image: InnovationImg,
  },
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-[#03040C] py-20 px-6 md:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0D0D0F] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="overflow-hidden h-56 md:h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-[#0D0D0F] rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
