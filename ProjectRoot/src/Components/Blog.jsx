import React, { useState } from "react";
import BlogCard from "./Cards/BlogCard";
import BlogModal from "./Cards/BlogModal";

// Import local images
import webApp from "../assets/webApp.jpg";
import webApp1 from "../assets/webApp1.jpg";
import webApp2 from "../assets/InnovationTeam.jpg"


const blogs = [
  {
    id: 1,
    title: "How to Build a Modern Web App",
    summary: "Tips and best practices for building scalable modern web applications.",
    image: webApp,
    content: "Full content of blog 1...",
  },
  {
    id: 2,
    title: "Top 10 UI/UX Trends in 2025",
    summary: "Discover the latest UI/UX trends that will dominate in 2025.",
    image: webApp1,
    content: "Full content of blog 2...",
  },
  {
    id: 3,
    title: "Understanding JavaScript Frameworks",
    summary: "A deep dive into modern JavaScript frameworks and when to use them.",
    image: webApp2,
    content: "Full content of blog 3...",
  },

];

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => setSelectedBlog(blog);

  return (
    <section className="bg-[#03040C] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Blog</h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#0D0D0F] rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fadeIn"
            onClick={() => handleBlogClick(blog)}
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </section>
  );
};

export default BlogSection;
