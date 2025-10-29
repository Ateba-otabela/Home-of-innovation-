import React from "react";
import HeroSection from "../Components/HeroSection";
import { pages } from "../assets/pages";

const ServicesPage = () => {
  return (
    <>
      <HeroSection currPage={pages.SERvICES} />
      <div className="w-full h-screen bg-[#03040C]">Serices Page</div>
    </>
  );
};

export default ServicesPage;
