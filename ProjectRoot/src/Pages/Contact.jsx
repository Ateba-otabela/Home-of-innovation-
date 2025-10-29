import React from "react";
import HeroSection from "../Components/HeroSection";
import { pages } from "../assets/pages";

const ContactPage = () => {
  return (
    <>
      <HeroSection currPage={pages.CONTACT} />
      <div className="w-full h-screen bg-[#03040C]">Contact Page</div>
    </>
  );
};

export default ContactPage;
