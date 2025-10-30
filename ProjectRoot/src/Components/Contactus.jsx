import React from "react";

const ContactUsSection = () => {
  return (
    <section className="bg-[#03040C] text-white py-20 px-6 md:px-20">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact Info & Map */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Have a project or idea you want to discuss? We'd love to hear from you! Fill out
            the form and our team will get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-200 text-lg">
            <p>
              <span className="font-semibold">Email:</span> contact@homeofinnovation.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +237 672 320 608
            </p>
            <p>
              <span className="font-semibold">Address:</span> ENS Street, Bambili, Bamenda, Cameroon
            </p>
          </div>

          {/* Map */}
          <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-blue-500">
            <iframe
              title="Home of Innovation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456!2d10.123456!3d5.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1050abcdef12345%3A0xabcdef1234567890!2sENS%20Street%2C%20Bambili%2C%20Bamenda!5e0!3m2!1sen!2scm!4v1698512345678!5m2!1sen!2scm"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form className="bg-[#0D0D0F] p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-[#011E5F]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-[#011E5F]/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
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
