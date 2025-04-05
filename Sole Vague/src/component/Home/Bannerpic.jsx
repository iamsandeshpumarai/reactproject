import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Banner1 from '../../../image/shoesphoto/shoe10.jpg'; // Adjust the path to your image
import Banner2 from '../../../image/shoesphoto/shoe5.jpg'; // Adjust the path to your image
import './animations.css'; // Custom CSS file for animations
import Banner from './Bannertext.jsx';
import { useNavigate } from 'react-router-dom';


const Bannerpic = () => {
  const [fade, setFade] = useState(false);
const navigate =useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(prev => !prev); // Toggle fade state every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return (
    <>
      {/* Banner Image Section */}
      <div className="w-[100vw] h-[83vh] relative flex overflow-hidden">
        
        {/* First Image: Fade in and out with ease-in animation */}
        <motion.img
          src={Banner1}
          className="absolute w-full h-full object-cover"
          alt="Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: fade ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        />
        
        {/* Second Image: Fade in and out with ease-in animation */}
        <motion.img
          src={Banner2}
          className="absolute w-full h-full object-cover"
          alt="Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: fade ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        />

        <span className="border border-black p-3 bg-transparent cursor-pointer text-black overflow-hidden rounded-md absolute bottom-20 left-10 group hover:text-white transition-all delay-100">
          <span className="absolute inset-0 w-0 bg-gray-400 transition-all duration-300 ease-out group-hover:w-full"></span>
          <span onClick={()=>{
navigate('/allcollection')
          }} className="relative z-10">Shop Now</span>
        </span>
      </div>

      {/* Animated Text Section */}
      <Banner />
    </>
  );
};

export default Bannerpic;
