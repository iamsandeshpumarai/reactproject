import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Scroller = ({ Blocks, title }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = Blocks.length;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex < totalItems - 1 ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalItems - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, totalItems]);

  const BlockItem = ({ block }) => {
    const [activeImage, setActiveImage] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);

    return (
      <a
        key={block.id}
        
        target="_blank"
        rel="noopener noreferrer"
        className="flex-none w-[23%]"
        onMouseEnter={() => {
          setActiveImage(1);
          setShowThumbnails(true);
        }}
        onMouseLeave={() => {
          setActiveImage(0);
          setShowThumbnails(false);
        }}
      >
        <div className="relative">
          <div className="h-89 m-4 flex flex-col items-center justify-center bg-white shadow-md rounded-lg border border-gray-200 p-2 transform transition duration-300 hover:scale-105">
            {/* Main Image */}
            <img
              src={activeImage === 0 ? block.image : block.image2}
              alt={block.text}
              className="w-full h-29 object-cover rounded-md transition-opacity duration-300"
            />

            {/* Thumbnails (Shown on Hover) */}
            {showThumbnails && (
              <div className="absolute bottom-[70px] left-3 flex gap-2 bg-white p-1 rounded-md shadow-md">
                {[0, 1].map((idx) => (
                  <img
                    key={idx}
                    src={idx === 0 ? block.image : block.image2}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`w-8 h-8 object-cover rounded cursor-pointer transition-opacity ${
                      activeImage === idx ? "opacity-100" : "opacity-50"
                    }`}
                    onMouseEnter={() => setActiveImage(idx)}
                  />
                ))}
              </div>
            )}

            {/* Text */}
            <p className="mt-2 text-center text-sm font-medium text-gray-700">
              {block.text}
            </p>
            <p className="mt-1 text-center text-base font-bold text-gray-900">
              {block.price}
            </p>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div
      className="cursor-pointer flex flex-col items-center w-[98vw] mx-auto p-9"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-4xl font-bold rounded-md p-3 relative group">
        {title}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </h1>

      <div className="relative w-full">
        {isHovered && index > 0 && (
          <button
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 p-6 hover:bg-gray-600 transition-all delay-100 hover:text-white bg-gray-300 rounded-full shadow-md"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>
        )}

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 25}%)` }} // Shift one item at a time
          >
            {Blocks.map((block) => (
              <BlockItem key={block.id} block={block} />
            ))}
          </div>
        </div>

        {isHovered && index < totalItems - 1 && (
          <button
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 p-6 hover:bg-gray-600 transition-all delay-100 hover:text-white bg-gray-300 rounded-full shadow-md"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Scroller;
