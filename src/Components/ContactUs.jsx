import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
import bgimage from "../Assest/Web_Images/Bg Plexus.png";

// SubmitButton Component
const SubmitButton = ({ TextContent }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2 hover:scale-[1.02] rounded-[5px] h-[50px] w-[145px] hover:text-white transition-all duration-200">
        {TextContent}
      </button>
    </div>
  );
};

const SecondarySubmitButton = ({ TextContent }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-primary1 border-2 bg-white border-primary1 hover:scale-[1.02] rounded-[5px] h-[48px] w-[145px] hover:text-primaryHover2 transition-all duration-200">
        {TextContent}
      </button>
    </div>
  );
};

const SecondarySubmitButton1 = ({ TextContent }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-primary1 border-2 bg-white border-primary1 hover:scale-[1.02] rounded-[5px] h-[48px] w-[298px] hover:text-primaryHover2 transition-all duration-200">
        {TextContent}
      </button>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-12 max-w-7xl mx-auto">
        {/* Left Side: Contact Form */}
        <div className="w-full md:w-1/3">
          <p className="text-gray-500 text-[20px] font-sans md:text-base mb-8 text-center" style={{ lineHeight: '1.8' }}>
            At BioZone, we’re happy to help with any inquiries or feedback. Please fill
            out the form below, and we’ll get back to you as soon as possible!
          </p>

          <form className="space-y-6">
            {/* Input Fields */}
            <div className="relative">
              <label className="absolute left-2 top-[-15px] px-2 bg-white text-black-500 text-[17px]">
                Enter your name
              </label>
              <div className="border border-primary1 rounded-md p-2">
                <input type="text" placeholder="" className="w-full focus:outline-none placeholder-transparent" />
              </div>
            </div>

            <div className="relative">
              <label className="absolute left-2 top-[-15px] px-2 bg-white text-black-500 text-[17px]">
                Enter your email address
              </label>
              <div className="border border-primary1 rounded-md p-2">
                <input type="email" placeholder="" className="w-full focus:outline-none placeholder-transparent" />
              </div>
            </div>

            <div className="relative">
              <label className="absolute left-2 top-[-15px] px-2 bg-white text-black-500 text-[17px]">
                Subject
              </label>
              <div className="border border-primary1 rounded-md p-2">
                <input type="text" placeholder="" className="w-full focus:outline-none placeholder-transparent" />
              </div>
            </div>

            <div className="relative">
              <label className="absolute left -2 top-[-15px] px-4 bg-white text-black-500 text-[17px]">
                Message
              </label>
              <div className="border border-primary1 rounded-md p-3">
                <textarea type="text" rows="4" className="w-full focus:outline-none placeholder-transparent" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-5 ">
              {/* Use SubmitButton for Clear and Submit */}
              <SecondarySubmitButton TextContent="Clear" />
              <SubmitButton TextContent="Submit" />
            </div>
          </form>
        </div>

       {/* Divider */}
<div className="hidden md:block border-l-2 border-dashed border-primary2 self-stretch h-screen opacity-40"></div> {/* Adjust opacity here */}

        {/* Right Side: Contact Options */}
        <div className="w-full md:w-1/2">
          <h2 className="text-primary2 text-5xl md:text-6xl font-reddit mb-5">Get in touch</h2>
          <p className="text-gray-500 mb-4 pb-5">
            At BioZone, we’re here to assist you with any questions or feedback. Reach out to us - we’d love to hear from you!
          </p>

         {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-9">
             {/* Card 1 */}
          <div className="bg-white shadow-md rounded-md p-10 flex items-center gap-6 relative h-32 w-60 "> {/* Adjust the width with w-64 or any other value */}
    <span className="text-primary1 text-3xl absolute top-5 left-3">
      <IoMailOutline />
    </span>

    <div className="absolute bottom-6 left-3">
      <p className="text-gray-700 font-semibold">Email Us</p>
      <p className="text-gray-500 text-sm">hello@biozone.lk</p>
    </div>
  </div>


            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-md p-10 flex items-center gap-6 relative h-32 w-60"> {/* Adjust the width with w-64 or any other value */}
            <span className="text-primary1 text-3xl absolute top-5 left-3">
                <IoCallOutline />
              </span>
              <div className="absolute bottom-6 left-3">
      <p className="text-gray-700 font-semibold">Call Us</p>
      <p className="text-gray-500 text-sm">+1 (234) 567-890</p>
    </div>
              
            </div>



            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-md p-10 flex items-center gap-6 relative h-32 w-60"> {/* Adjust the width with w-64 or any other value */}
            <span className="text-primary1 text-3xl absolute top-5 left-3">
            <IoMapOutline />
              </span>
              <div className="absolute bottom-6 left-3">
      <p className="text-gray-700 font-semibold">Visit Us</p>
      <p className="text-gray-500 text-sm">Colombo 03, Kollupitiya</p>
    </div>
              
            </div>


           {/* Card 4 */}
           <div className="bg-white shadow-md rounded-md p-10 flex items-center gap-6 relative w-60"> {/* Adjust the width with w-64 or any other value */}
            <span className="text-primary1 text-3xl absolute top-5 left-3">
            <IoEarth />
              </span>
              <div className="absolute bottom-6 left-3">
      <p className="text-gray-700 font-semibold">Website</p>
      <p className="text-gray-500 text-sm">www.biozone.lk</p>
    </div>
              
            </div>
          </div>
         



          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <SecondarySubmitButton1 TextContent="Chat on Whatsapp" />
            <SecondarySubmitButton1 TextContent="Access to Telegram Group" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
