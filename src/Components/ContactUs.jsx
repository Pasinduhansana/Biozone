import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
import bgimage from "../Assest/Web_Images/Bg Plexus.png";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">

		<img
						src={bgimage}
						alt="Background DNA sample"
						className="absolute left-0 bottom-0 -z-10"
					/>
      {/* Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-12 max-w-7xl mx-auto">
        {/* Left Side: Contact Form */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
            At BioZone, we’re happy to help with any inquiries or feedback.
            Please fill out the form below, and we’ll get back to you as soon as
            possible!
          </p>
          <form className="space-y-6">
            {/* Input Fields */}
            <div className="border border-green-400 rounded-md p-2">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full focus:outline-none placeholder-gray-500"
              />
            </div>

            <div className="border border-green-400 rounded-md p-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full focus:outline-none placeholder-gray-500"
              />
            </div>

            <div className="border border-green-400 rounded-md p-2">
              <input
                type="text"
                placeholder="Subject"
                className="w-full focus:outline-none placeholder-gray-500"
              />
            </div>

            <div className="border border-green-400 rounded-md p-2">
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full focus:outline-none placeholder-gray-500"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="reset"
                className="px-6 py-2 border-2 border-green-400 rounded text-green-400 hover:bg-green-50 transition"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-primary2 text-white rounded hover:bg-primary1 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      {/* Divider */}
<div className="hidden md:block border-l-2 border-dashed border-primary2 self-stretch"></div>



        {/* Right Side: Contact Options */}
        <div className="w-full md:w-1/2">
        <h2 className="text-primary2 text-6xl md:text-6xl font-bold -mt-6 mb-8">Get in touch</h2>
          <p className="text-gray-500 mb-9 pb-5">
            At BioZone, we’re here to assist you with any questions or feedback.
            Reach out to us - we’d love to hear from you!
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4">
              <span className="text-primary1 text-3xl"><IoMailOutline/></span>
              <div>
                <p className="text-gray-700 font-semibold">Email Us</p>
                <p className="text-gray-500 text-sm">hello@biozone.lk</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4">
              <span className="text-primary1 text-3xl"><IoCallOutline/></span>
              <div>
                <p className="text-gray-700 font-semibold">Call Us</p>
                <p className="text-gray-500 text-sm">+1 (234) 567-890</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4">
              <span className="text-primary1 text-3xl"><IoMapOutline /></span>
              <div>
                <p className="text-gray-700 font-semibold">Visit Us</p>
                <p className="text-gray-500 text-sm">
                  Colombo 03, Kollupitiya
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4">
              <span className="text-primary1 text-3xl"><IoEarth /></span>
              <div>
                <p className="text-gray-700 font-semibold">Website</p>
                <p className="text-gray-500 text-sm">www.biozone.lk</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto px-6 py-2 border-2 border-primary2 text-primary2 rounded hover:bg-primary1 hover:text-primarytextwhite transition">
              Chat on Whatsapp
            </button>
            <button className="w-full sm:w-auto px-6 py-2 border-2 border-primary2 text-primary2 rounded hover:bg-primary1 hover:text-primarytextwhite transition">
              Access to Telegram Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
