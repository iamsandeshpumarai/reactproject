import React from 'react'
import Adidas from '../../../brandimage/adidas.png'
import Jordan from '../../../brandimage/jordan.png'
import Nike from '../../../brandimage/nike.png'
import Puma from '../../../brandimage/puma.png'
import "@fontsource/roboto"; // Import Roboto font
import { useNavigate } from 'react-router-dom'
 // Import Tailwind styles


const Brand = () => {
const navigate = useNavigate()

  return (
    <div  className='h-[20vh]  w-screen  mt-9 '>
        <h1 className=' text-2xl mb-3 ml-9 mt-9 font-roboto'>Shop From Top Brands</h1>
        <div className='w-full h-full flex gap-10 ml-7'>

    <div onClick={()=>{
navigate('/adidas')
    }} className='w-[20vw] h-[12vh] cursor-pointer  hover:bg-[#F5F5F5]  border border-[#DDDDDD] rounded-md ml-8 mr-3 '>
        <img src={Adidas} className='object-fill' alt="" />
    </div>
    <div 
    onClick={()=>{
        navigate('/jordan')
            }}
    className='w-[20vw] h-[12vh] cursor-pointer hover:bg-[#F5F5F5] rounded-md border border-[#DDDDDD] flex justify-center items-center '>
        <img src={Jordan} className='object-fill mb-5 ml-8' alt="" />
    </div>
    <div
    onClick={()=>{
        navigate('/nike')
            }}
    className='w-[20vw] h-[12vh] hover:bg-[#F5F5F5]  cursor-pointer border rounded-md border-[#DDDDDD] flex justify-center items-center'>
        <img src={Nike} className='object-fill w-[10vw] h-[10vh] mb-3' alt="" />
    </div>
    <div
    onClick={()=>{
        navigate('/puma')
            }}
    className='w-[20vw] h-[12vh] hover:bg-[#F5F5F5]  border border-[#DDDDDD] cursor-pointer rounded-md flex justify-center items-center'>
        <img src={Puma} className='object-fill w-[7vw] h-[7vh] mb-5' alt="" />
    </div>

        </div>
    </div>
  )
}

export default Brand
