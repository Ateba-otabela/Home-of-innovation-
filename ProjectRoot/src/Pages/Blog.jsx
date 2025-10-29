import React from "react";
import HeroSection from "../Components/HeroSection";
import { pages } from "../assets/pages";

const BlogPage = () => {
  return (
    <>
      <HeroSection currPage={pages.BLOG} />
      <div className="w-full h-screen bg-[#03040C]">Blog Page</div>
    </>
  );
};

export default BlogPage;
