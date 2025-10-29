import React from "react";
import HeroSection from "../Components/HeroSection";
import { pages } from "../assets/pages";

const AboutPage = () => {
  return (
    <>
      <HeroSection currPage={pages.ABOUT} />
      <div className="w-full h-screen bg-[#03040C]">
        <h1>About page</h1>
      </div>
    </>
  );
};

export default AboutPage;
