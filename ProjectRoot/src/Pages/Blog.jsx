import React from "react";
import HeroSection from "../Components/HeroSection";
import { pages } from "../assets/pages";
import HomePage from "./Home";

const BlogPage = () => {
  return (
    <>
      <HomePage/>
      <HeroSection currPage={pages.BLOG} />
      <div className="w-full h-screen bg-[#03040C]">Blog Page</div>
    </>
  );
};

export default BlogPage;
