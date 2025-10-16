import React, { useState } from "react";
const projects = [
  {
    title: "E-Learning Platform",
    description:
      "A web application for online learning, featuring course creation, user authentication, and progress tracking.",
    image: "https://example.com/elearning-platform.jpg",
  },
  {
    title: "Personal Finance Manager",
    description:
      "A mobile app for tracking expenses, creating budgets, and setting financial goals.",
    image: "https://example.com/finance-manager.jpg",
  },
  {
    title: "Weather Forecast App",
    description:
      "A web application that provides current and forecasted weather conditions for locations worldwide.",
    image: "https://example.com/weather-app.jpg",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A web application for managing social media accounts, scheduling posts, and tracking engagement metrics.",
    image: "https://example.com/social-media-dashboard.jpg",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website with product management, shopping cart, and payment gateway integration.",
    image: "https://example.com/ecommerce-website.jpg",
  },
  {
    title: "Task Management Tool",
    description:
      "A web application for creating, assigning, and tracking tasks and projects.",
    image: "https://example.com/task-management-tool.jpg",
  },
  {
    title: "Recipe Book App",
    description: "A mobile app for discovering, saving, and sharing recipes.",
    image: "https://example.com/recipe-book-app.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal website showcasing projects, skills, and experience.",
    image: "https://example.com/portfolio-website.jpg",
  },
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          onClick={() => handleProjectClick(project)}
        />
      ))}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default PortfolioSection;
