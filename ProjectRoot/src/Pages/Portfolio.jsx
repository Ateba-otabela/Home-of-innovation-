import React from "react";

import { pages } from "../assets/pages";
import HomePage from "./Home";
import PortfolioSection from "../Components/Portfolio";
import AboutUsSection from "../Components/AboutUs";
import OurStory from "../Components/OurStory";
import ContactUsSection from "../Components/Contactus";
import Footer from "../Components/Footer";
import BlogSection from "../Components/Blog";



const PortfolioPage = () => {
  return (
    <>
      <HomePage/>
      <BlogSection/>
      <PortfolioSection/>
      <AboutUsSection/>
      <OurStory/>
      <ContactUsSection/>
      <Footer/>
    </>
  );
};

export default PortfolioPage;
