import React from "react";
import { pages } from "../assets/pages";
import HeroSection from "../Components/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection currPage={pages.HOME} />
      <div className="w-full h-screen bg-[#03040C]">Home Page</div>
    </>
  );
};

export default HomePage;
