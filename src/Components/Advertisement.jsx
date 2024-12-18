import React, { useState, useEffect } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import axios from "axios";

const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await axios.get("http://localhost:3080/api/admin/");
        if (response.data.message === "Advertisements fetched successfully") {
          setAdvertisements(response.data.data);
        } else {
          console.error("Failed to fetch advertisements.");
        }
      } catch (error) {
        console.error("Error fetching advertisements:", error);
      }
    };

    fetchAdvertisements();
  }, []);

  // Image array
  const images = advertisements.map((ad) => ad.imageUrl);
  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  // Calculate the visible images with the last image first
  const visibleImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  // Navigate to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the next image
  const goToNext = () => {

    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container relative w-full mx-auto">
      <div className="text-center lg:p-10 p-3">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text p-3">
            Highlights
          </div>
          <div className="lg:text-5xl text-2xl font-semibold mt-3">
            Featuring Key Highlights
          </div>
          <div className="content-center flex lg:w-3/4 font-normal text-[#7d7d7d] p-2 mt-3">
            Discover the latest highlights, schedules, and topics from our classes. These showcase important events, learning opportunities, and updates for students.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button onClick={goToPrevious} className=" top-1/2 left-0">
          <VscChevronLeft style={{ color: "gray", fontSize: "34px" }} />
        </button>
        <div className="flex">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`w-1/3 transition-all duration-300 ${index === 0
                  ? "scale-75"
                  : index === 1
                    ? ""
                    : "scale-75"
                }`}
            >
              <div className="m-5">
                <img
                  src={image}
                  alt={`Slide ${currentIndex + index}`}
                  className="lg:h-[350px] object-cover rounded-md shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
        <button onClick={goToNext} className=" top-1/2 right-0">
          <VscChevronRight style={{ color: "gray", fontSize: "34px" }} />
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
