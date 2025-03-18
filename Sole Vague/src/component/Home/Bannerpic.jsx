import React, { useEffect, useState } from 'react';
import Banner1 from '../../../image/shoesphoto/shoe3.jpg';

const Bannerpic = () => {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    let intervals = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 5000); // Toggle text every 5 seconds

    return () => clearInterval(intervals); // Clear the interval on component unmount
  }, []);

  return (
    <>
      {/* Banner Image */}
      <div className="w-[100vw] h-[80vh] relative">
        <img
          src={Banner1}
          className="w-full h-full object-cover"
          alt="Banner"
        />
        <span className="border border-black p-3 bg-transparent cursor-pointer text-black overflow-hidden rounded-md absolute bottom-20 left-10 group hover:text-white transition-all delay-100">
          <span className="absolute inset-0 w-0 bg-gray-400 transition-all duration-300 ease-out group-hover:w-full"></span>
          <span className="relative z-10">Shop Now</span>
        </span>
      </div>

      {/* Text Animation */}
      <div className="text-center w-screen h-20 bg-[#ECEFF1] flex items-center justify-center">
        {showFirstText ? (
          <span className="text-xl font-bold">
            Upto 10% Off In Every Product
          </span>
        ) : (
          <span className="text-xl font-bold">
            Till September, Hurry Up!
          </span>
        )}
      </div>
    </>
  );
};

export default Bannerpic;
