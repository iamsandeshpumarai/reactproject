import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react'; // Importing icons
import videos from '../../../videos/Homebannervid/shoebannervid.mp4';

const Bannervid = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='relative w-[100vw] h-[85vh] flex justify-end items-center'>
      {/* Video Element */}
      <div className='h-full w-[70vw]'>

      <video 
        ref={videoRef}
        src={videos}
        autoPlay
        loop
        muted
        className='h-full w-full object-cover '
        ></video>
        </div>

      {/* Play/Pause Button with Icon */}
      {/* <button
        onClick={togglePlayPause}
        className='absolute  rounded-full left-[180px] bottom-[60px] p-2 bg-black bg-opacity-50 
     flex items-center justify-center w-12 h-12'
      >
        {isPlaying ? <Pause size={24} color='white' /> : <Play size={24} color='white' />}
      </button> */}
      <span className='border rounded-md border-black bg-black text-white p-3 absolute left-10 top-[235px] cursor-pointer '> Our New Product</span>
      <span className=' rounded-md cursor-pointer border border-black p-3 absolute left-10 top-[290px] '>Nike Air Max DN8</span>
      <div className='absolute left-6  text-2xl   cursor-pointer top-[360px] rounded-md p-2 transition-all delay-100 '><h2>Nike Air Max DN8 </h2>
      <span>
Experience ultimate comfort and style with <br /> the latest Nike Air Max DN8.  This sneaker features  <br /> Dynamic Air  technology, offering a responsive <br/> and adaptive feel with every step.
</span>
<button className="relative px-3 top-[10vh] right-[24vw] py-3 text-black bg-white border-2 border-black rounded-xl overflow-hidden transition-all duration-500 ease-in-out group">
      <span className="relative  z-10 transition-colors duration-500 group-hover:text-white">
        Buy Now
      </span>
      <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500 ease-in-out left-0"></span>
    </button>
</div>
    </div>
  );
};

export default Bannervid;
