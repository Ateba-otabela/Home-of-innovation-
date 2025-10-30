import React, { useState } from "react";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web and mobile app development, UI/UX design, e-commerce solutions, and custom software development tailored to your needs.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines vary based on complexity, but typically small projects take 2-4 weeks, and larger projects may take 2-3 months.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes! We offer ongoing maintenance and support to ensure your application runs smoothly and stays up-to-date.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Pricing depends on the project scope and complexity. We offer fixed-price projects as well as hourly rates for flexible engagements.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#03040C] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-[#0D0D0F] p-5 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className="text-blue-400 text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`mt-3 text-gray-300 overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
