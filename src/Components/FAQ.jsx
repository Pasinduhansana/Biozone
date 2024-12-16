import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const faqs = [
  { question: "How do I enroll for classes?", answer: "You can enroll by visiting our website and signing up." },
  { question: "How are classes conducted?", answer: "Classes are conducted online through live video sessions." },
  { question: "Can I download course materials?", answer: "Yes, course materials are available for download after enrollment." },
  { question: "How do I pay for a class?", answer: "You can pay via credit card, PayPal, or bank transfer." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary2 mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-center mb-10 pt-11">
        From foundational concepts to advanced topics, we're here to help you learn and grow your knowledge about the wonders of life.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-700">{faq.question}</span>
              <span
                className={`text-3xl text-gray-500 transition-transform duration-500 ease-in-out ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <IoChevronDownOutline />
              </span>
            </button>
            <div
              className={`pb-4 text-gray-600 transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 overflow-auto"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
