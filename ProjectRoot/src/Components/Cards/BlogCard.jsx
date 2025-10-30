import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="overflow-hidden rounded-xl">
      {/* Image */}
      <div className="w-full h-56 overflow-hidden rounded-t-xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 bg-[#0D0D0F]">
        <h3 className="text-xl font-semibold mb-2 text-white">{blog.title}</h3>
        <p className="text-gray-300 text-sm">{blog.summary}</p>
      </div>
    </div>
  );
};

export default BlogCard;

