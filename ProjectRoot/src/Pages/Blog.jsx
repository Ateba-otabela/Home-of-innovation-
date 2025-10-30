import React from "react";
import { pages } from "../assets/pages";
import HomePage from "./Home";
import PortfolioSection from "../Components/Portfolio";
import AboutUsSection from "../Components/AboutUs";
import OurStory from "../Components/OurStory";
import ContactUsSection from "../Components/Contactus";
import Footer from "../Components/Footer";
import BlogSection from "../Components/Blog";
import FAQSection from "../Components/FAQ";
import ServicesSection from "../Components/Services";
import TestimonialSection from "../Components/Tesmonies";
import AboutCEO from "../Components/CEO";
import TeamSection from "../Components/AboutTeam";

const BlogPage = () => {
  return (
    <>
      <HomePage/>
      <BlogSection/>
      <PortfolioSection/>
      <AboutUsSection/>
      <OurStory/>
      <AboutCEO/>
      <TeamSection/>
      <ServicesSection/>
      <TestimonialSection/>
      <FAQSection/>
      <ContactUsSection/>
      <Footer/>
    </>
  );
};

export default BlogPage;
