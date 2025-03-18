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
      <button
        onClick={togglePlayPause}
        className='absolute  rounded-full left-[180px] bottom-[60px] p-2 bg-black bg-opacity-50 
     flex items-center justify-center w-12 h-12'
      >
        {isPlaying ? <Pause size={24} color='white' /> : <Play size={24} color='white' />}
      </button>
      <span className='border rounded-md border-black bg-black text-white p-3 absolute left-10 cursor-pointer '> Our New Product</span>
      <span className=' rounded-md cursor-pointer border border-black p-3 absolute left-10 top-[340px] '>Nike Air Max DN8</span>
    </div>
  );
};

export default Bannervid;
