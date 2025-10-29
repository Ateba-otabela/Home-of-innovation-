import React from "react";
import { heroContent } from "../assets/pages";
//here you are to render the text on the hero section and the images of this section  based on the page you are looking at
//that's pretty simple in react right ..

const HeroSection = ({ currPage }) => {
  const { title, tagline, button1, button2 } =
    heroContent[currPage] || heroContent.Home;
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen bg-blue-700">
      <p>{title}</p>
      <p>{tagline}</p>
      <p>{button1}</p>
      <p>{button2}</p>
    </div>
  );
};
export default HeroSection;
