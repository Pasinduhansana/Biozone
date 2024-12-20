import React, { useState } from 'react';
import data from '../Assest/Datafile/classdata.json';
import { VscArrowRight, VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";

const Map = () => {
    // State to control the visibility of the modal
    const [selectedTimetable, setSelectedTimetable] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal 
    const openModal = (institute) => {
        setSelectedTimetable(institute);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTimetable(null);
    };

    return (
        <div className="container mx-auto relative">
            <div className="text-center lg:p-5 p-3">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text">
                        Our Locations
                    </div>
                    <div className="lg:text-5xl text-2xl font-medium mt-1">
                        See what's best for you
                    </div>
                    <div className="flex justify-center lg:w-3/4 font-normal text-[#7d7d7d] p-2 mt-1">
                        Explore the different locations where classes are conducted to find a convenient option that suits you best
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-wrap gap-6 w-3/5 justify-center">
                    {data.map((institute, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-solid border-gray-200 shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer max-h-60 w-80"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1527822618093-743f3e57977c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                                backgroundSize: 'cover',
                                height: '300px',
                            }}
                        >
                            <div className='lg:h-3/5  h-1/2'></div>
                            <div className="bottom-0 p-2 h-1/2 bg-[#FFFFFF99] backdrop-blur-[30px] ">
                                <h2 className="text-lg font-semibold text-gray-800">{institute.locationName}</h2>
                                <p className="text-gray-600 lg:text-base text-sm">{institute.address}</p>
                                <a
                                    className="text-primary2 hover:text-primaryHover1 flex items-center mt-2 transition-all duration-300 hover:scale-105"
                                    href="#"
                                    onClick={() => openModal(institute)}
                                >
                                    View Timetable
                                    <VscArrowRight />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Timetable Details */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[10px] bg-black bg-opacity-10 z-50">
                    <div className="bg-white lg:w-4/5 lg:h-auto w-full h-full  relative rounded-lg">
                        <button
                            className="absolute  right-1 m-3 p-1 bg-white border border-solid border-gray-300 px-4 py-2 rounded-full hover:bg-primaryHover1"
                            onClick={closeModal}
                        >
                            <VscChromeClose />
                        </button>
                        <iframe
                            className="w-full  object-cover rounded-lg"  // Adjust iframe style
                            src={selectedTimetable.addressLink || "default-source"}
                            width="600"
                            height="600"
                            title="Map"
                        />
                        <div className="absolute  bg-[#FFFFFF99] backdrop-blur-[5px] lg:p-4 rounded-s-xl w-full lg:w-2/4 lg:h-auto top-1/2 lg:right-3 transform lg:-translate-y-1/2 flex items-center justify-center ">
                            <div className="lg:w-11/12">
                                {/* Location Name and Address */}
                                <div className="text-2xl text-gray-800 mb-4 text-center p-2">
                                    <div className="font-semibold">{selectedTimetable.locationName}</div>
                                    <div>
                                        <p className="mb-2 text-gray-600 lg:text-lg text-sm">{selectedTimetable.address}</p>
                                    </div>
                                </div>

                                {/* Classes List */}
                                <div>
                                    {selectedTimetable.classes.map((classItem, index) => (
                                        <motion.div
                                        key={index}
                                        className="flex items-center p-2 rounded-lg m-2 bg-white shadow-lg hover:shadow-xl "
                                        initial={{ opacity: 0, x: -100 }} 
                                        animate={{ opacity: 1, x: 0 }} 
                                        transition={{ duration: 0.5, ease: "easeOut",  delay: index * 0.2, }} 
                                      >
                                            {/* Class Details */}
                                            <div className="bg-gradient-to-r from-primary2 to-primary1 text-white p-3 rounded-lg w-2/3">
                                                <div className="flex justify-around">
                                                    <div className="flex items-center space-x-5">
                                                        <span className="font-medium text-xl">{classItem.classtype}</span>
                                                        <span className="font-light text-xl">{classItem.year}</span>
                                                        <span className="p-1 border border-solid border-white rounded-md pl-2 pr-2 text-sm">
                                                            {classItem.medium}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Class Time */}
                                            <div className="ml-3 text-right text-gray-700">
                                                <p className="text-base font-normal">{classItem.day}</p>
                                                <p className="text-xs text-center">{classItem.time}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="text-base font-light text-gray-800 mt-4 text-center">
                                    <div>Times may change due to agile timetable</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            )}

        </div>
    );
};

export default Map;
