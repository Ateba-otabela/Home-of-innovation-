import React from "react";
import HeroSection from "../Components/HeroSection";
import { pages } from "../assets/pages";
import HomePage from "./Home";
import Header from "../Components/Header";

const ContactPage = () => {
  return (
    <>
      <HomePage/>
      <HeroSection currPage={pages.CONTACT} />
      <div className="w-full h-screen bg-[#03040C]">Contact Page</div>
    </>
  );
};

export default ContactPage;
