import React from 'react';
import BackgroundGradientAnimation from './Component/BackgroundGradientAnimation'; // Adjust the path if needed

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-4 bg-cover bg-center">
      {/* Background Gradient Animation */}
      <BackgroundGradientAnimation className="absolute inset-0 z-0" />

      <div className="max-w-screen-lg w-full px-4 py-2 bg-transparent rounded-lg z-10">
        {/* First Section */}
        <div className="flex items-center space-x-4 mb-4">
          <p className="text-[120px] font-serif text-gray-500 leading-none">Where</p>
          <p className="text-gray-700 text-lg max-w-[550px]">
            Now through this web site, he is ready to guide you 
            towards your academic goals with personalized support and resources.
          </p>
        </div>

        {/* Second Section */}
        <div className="flex items-center mb-4">
          <p className="text-[120px] font-serif ml-12 text-gray-800 leading-none">
            <span className="text-gray-500">Biology and</span>
          </p>
        </div>

        {/* Third Section */}
        <div className="flex items-center mb-4">
          <p className="text-[120px] font-serif text-gray-500 leading-none">Technology</p>
          <p className="text-gray-700 text-lg max-w-[550px]">
            His dedication and expertise have made him a trusted mentor for Advanced Level students.
          </p>
        </div>

        {/* Fourth Section */}
        <div className="flex items-center mb-4 space-x-4">
          <p className="text-gray-700 text-lg max-w-[500px]">
            Graduating from the University of Peradeniya, Dr. Charitha Munasinghe has over 10 years of experience in
            teaching biology and helping students gain admission to Sri Lanka's top state universities.
          </p>
          <p className="text-[120px] font-serif text-gray-500 leading-none">meet</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
