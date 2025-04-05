import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";  // Import NavLink

const Categories = () => {
  const boxes = [
    {
      id: 1,
      image:
        "https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2025/february/250203-fl-flca-recz9ixec-m-w-k-update/250203-fl-flca-recz9IXEc-m-w-k-update-4up-caegory-mens-en.jpg",
      text: "Discover More",
      link: "/men", // Link to navigate within the app
    },
    {
      id: 2,
      image:
        "https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2025/february/250203-fl-flca-recz9ixec-m-w-k-update/250203-fl-flca-recz9IXEc-m-w-k-update-4up-caegory-womens-en.jpg",
      text: "Discover More",
      link: "/women", // Adjust to the correct route
    },
    {
      id: 3,
      image:
        "https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2025/march/250317-fl-recfmrkxw-march-madness/250317-fl-recfmrKXW-march-madness-3up.jpg",
      text: "Discover More",
      link: "/gym", // Adjust to the correct route
    },
    {
      id: 4,
      image:
        "https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2025/february/250203-fl-flca-recz9ixec-m-w-k-update/250203-fl-flca-recz9IXEc-m-w-k-update-4up-caegory-kids-en.jpg",
      text: "Discover More",
      link: "/kid", // Adjust to the correct route
    },
  ];

  return (
    <div className="w-[93%] h-[90vh] ml-[10vh] grid grid-cols-2 gap-4">
      {boxes.map((box, index) => {
        // Using Intersection Observer to trigger animation when in view
        const { ref, inView } = useInView({
          triggerOnce: true, // Trigger once when element is in view
          threshold: 0.3, // 30% of the element should be in view
        });

        // Set direction based on the index (odd or even)
        const slideDirection = index % 2 === 0 ? "-100%" : "100%";

        return (
          <NavLink
            key={box.id}
            to={box.link}  // Use NavLink instead of <a> to navigate within the app
            className="relative group overflow-hidden block"
            ref={ref}
          >
            {/* Image with faster sliding animation */}
            <motion.img
              src={box.image}
              alt={box.text}
              className="w-full h-full object-cover rounded-md transition-all duration-300 group-hover:blur"
              initial={{ x: slideDirection, opacity: 0 }}
              animate={{
                x: inView ? 0 : slideDirection,
                opacity: inView ? 1 : 0,
              }}
              transition={{
                duration: 0.1, // Faster transition duration
                ease: "linear", // Straightforward linear movement
              }}
            />
            {/* Hover text overlay */}
            <div className="absolute inset-0 flex items-start justify-center p-4">
              <span className="text-white text-2xl font-bold transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {box.text}
              </span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Categories;
