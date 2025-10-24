import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import BlogPage from "../Pages/Blog";
import HomePage from "../Pages/Home";
import ServicesPage from "../Pages/Services";
import ContactPage from "../Pages/Contact";
import PortfolioPage from "../Pages/Portfolio";
import AboutPage from "../Pages/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
