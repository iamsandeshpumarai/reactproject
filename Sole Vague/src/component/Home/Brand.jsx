import React from 'react'
import Adidas from '../../../brandimage/adidas.png'
import Jordan from '../../../brandimage/jordan.png'
import Nike from '../../../brandimage/nike.png'
import Puma from '../../../brandimage/puma.png'

const Brand = () => {

  return (
    <div className='h-[20vh] border w-screen border-black mt-9 '>
        <h1 className='text-center text-2xl mb-3'>Shop From Top Brands</h1>
        <div className='w-full h-full flex'>

    <div className='w-1/4 h-full  border border-black mr-3'>
        <img src={Adidas} className='object-fill' alt="" />
    </div>
    <div className='w-1/4 h-full border border-black'>
        <img src={Jordan} className='object-fill' alt="" />
    </div>
    <div className='w-1/4 h-full border border-black flex justify-center'>
        <img src={Nike} className='object-fill w-[10vw] h-[10vh] mt-6' alt="" />
    </div>
    <div className='w-1/4 h-full border border-black flex justify-center items-center'>
        <img src={Puma} className='object-fill w-[10vw] h-[10vh] mb-5' alt="" />
    </div>

        </div>
    </div>
  )
}

export default Brand
