import React from "react";
import HeroSection from "../Components/HeroSection";
import { pages } from "../assets/pages";
import HomePage from "./Home";

const ServicesPage = () => {
  return (
    <>
      <HomePage/>
      <HeroSection currPage={pages.SERvICES} />
      <div className="w-full h-screen bg-[#03040C]">Serices Page</div>
    </>
  );
};

export default ServicesPage;
