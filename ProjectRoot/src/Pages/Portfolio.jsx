import React from "react";
import HeroSection from "../Components/HeroSection";
import { pages } from "../assets/pages";
import HomePage from "./Home";
import PortfolioSection from "../Components/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <HomePage/>
      <PortfolioSection/>
      <HeroSection currPage={pages.PORTFOLIO} />
      <div className="w-full h-screen bg-[#03040C]">Portfolio Page</div>
    </>
  );
};

export default PortfolioPage;
