import React, { useState } from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { useNavigate } from 'react-router-dom';
import { nav } from 'framer-motion/client';

const GenderCollection = ({ Collection,Category }) => {
  let numbershoes = Collection.length;
  const navigate = useNavigate()
  const Navigateto  =(id)=>{
    navigate(`/details/${id}`)

  } 
  return (
    <>
      <Header />
      <div className='w-[95vw] relative justify-center items-center flex flex-wrap  mx-auto gap-7'>
   <h1 className='ml-9 absolute top-1 left-20 text-2xl'>{Category} ({numbershoes})</h1>   
        {Collection.map((data) => (
          <Card key={data.id} data={data} Navigateto={Navigateto}/>
        ))}
      </div>
      <Footer />
    </>
  );
};

// New Card Component
const Card = ({ data,Navigateto }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(data.image[0]); // Unique state per card

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className=" box mb-4 mt-12 w-[25vw] h-[59vh] overflow-hidden relative"
    >
      <div className="h-[45vh] w-full" onClick={()=>Navigateto(data.id)}>
        <img className="w-full h-full" src={image} alt={data.name} />
      </div>

      {/* Animated container */}
      <div
        className={`absolute bottom-0 left-0 w-full transform transition-all duration-300 ${
          show ? 'translate-y-[-10px] opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Row of images */}
        <div className="flex gap-1">
          {data.image.map((img, index) => (
            <div key={index} className="h-full w-[10%] ml-1">
              <img
                onMouseEnter={() => setImage(img)} // Changes image only for this card
                className="w-full h-full"
                src={img}
                alt=""
              />
            </div>
          ))}
        </div>
        <h3 className="text-red-600 ml-1 transition-opacity duration-500 delay-300">{data.name}</h3>
        <h3 className="ml-1 transition-opacity duration-500 delay-300">{data.Price}</h3>
      </div>

      {/* Info box */}
      {!show && (
        <div className="info ml-2">
          <h2 className="shoename text-red-500">{data.name}</h2>
          <h3 className="gender text-[#bdaaaa]">{data.gender}</h3>
          <h3 className="Available Color text-[#bdaaaa]">{data.Color}</h3>
          <h3>{data.Price}</h3>
        </div>
      )}
    </div>
  );
};

export default GenderCollection;
