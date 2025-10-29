import React from "react";
import HeroSection from "../Components/HeroSection";
import { pages } from "../assets/pages";

const PortfolioPage = () => {
  return (
    <>
      <HeroSection currPage={pages.PORTFOLIO} />
      <div className="w-full h-screen bg-[#03040C]">Portfolio Page</div>
    </>
  );
};

export default PortfolioPage;
