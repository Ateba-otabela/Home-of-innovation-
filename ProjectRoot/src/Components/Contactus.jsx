import React from "react";

const ContactUsSection = () => {
  return (
    <section className="bg-[#03040C] text-white py-20 px-6 md:px-20">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Have a project or idea you want to discuss? We'd love to hear from you! Fill out
            the form and our team will get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-200 text-lg">
            <p><span className="font-semibold">Email:</span> contact@homeofinnovation.com</p>
            <p><span className="font-semibold">Phone:</span> +237 6XX XXX XXX</p>
            <p><span className="font-semibold">Address:</span> 123 Innovation Lane, Yaoundé, Cameroon</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form className="bg-[#0D0D0F] p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-[#011E5F]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-[#011E5F]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-[#011E5F]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-semibold shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;

