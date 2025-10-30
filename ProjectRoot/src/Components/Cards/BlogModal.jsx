import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const BlogModal = ({ blog, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-[#0D0D0F] rounded-xl w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-blue-500 transition duration-300"
        >
          <AiOutlineClose />
        </button>

        {/* Image */}
        <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold mb-2 text-white">{blog.title}</h2>
        <p className="text-gray-300">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogModal;
