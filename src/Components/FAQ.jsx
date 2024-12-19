import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const faqs = [
  {
    question: "How do I enroll for classes?",
    answer: "You can enroll by visiting our website and signing up.",
  },
  {
    question: "How are classes conducted?",
    answer: "Classes are conducted online through live video sessions.",
  },
  {
    question: "Can I download course materials?",
    answer: "Yes, course materials are available for download after enrollment.",
  },
  {
    question: "How do I pay for a class?",
    answer: "You can pay via credit card, PayPal, or bank transfer.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-cover flex items-center justify-center px-4 overflow-y-auto"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.7) 30%, transparent 70%),
          url('src/Assest/Web_Images/Bg Plexus.png')
        `,
        backgroundPosition: '-450px 180px', // x = -450px, y = 180px
        backgroundRepeat: 'no-repeat', // Prevents image repetition
        backgroundSize: 'cover', // Ensures the image covers the entire container
      }}
    >
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-green-600 font-reddit uppercase text-sm font-semibold mb-3">
            Support
          </p>
          <h2 className="text-[48px] text-primarytext mb-2 font-reddit">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 mb-10 font-sans">
            Can’t find the answer you’re looking for? Please{" "}
            <a href="#" className="text-gray-500 underline">
              chat with our friendly team.
            </a>
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 pb-20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* Question */}
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-700">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <IoChevronDownOutline />
                </span>
              </button>

              {/* Answer */}
              <div
                className={`text-gray-600 overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
