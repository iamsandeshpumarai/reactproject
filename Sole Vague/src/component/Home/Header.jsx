import React from 'react'

import logo from '../../../image/logo/brandlogos.png'
const Header = () => {
  return (
    <div className='flex w-screen h-[10vh]'>
      <div className='logo w-1/3 h-full  '>
      <div className='w-full h-full logos flex items-center justify-center'>

        <img  className='h-[120px] w-[120px]  ml-4' src={logo} alt="" />
      </div>
      </div>
      <div className='menu logo w-1/3 h-full '>
      <ul className='h-full w-full flex gap-6 justify-center items-center' >
        <li className='cursor-pointer  hover:underline '>Men</li>
        <li className='cursor-pointer hover:underline'>Women</li>
        <li className='cursor-pointer hover:underline'>Kids</li>
        <li className='cursor-pointer hover:underline'>Sport</li>
      </ul>
      </div>
      <div className='flex gap-5  items-center justify-center sub-menu logo w-1/3 h-full  '>
      <div className='w-1/2 h-full flex items-center relative '>
      <input type="text" placeholder='search' className='placeholder:text-sm rounded-md w-45 p-1.5 ml-9 placeholder:text-black  bg-[#e4e5e7] mr-3 text-black text-sm'  />
      <i className="fa-solid fa-magnifying-glass absolute left-[197px] cursor-pointer"></i>
      </div>
      <div className='w-1/2 h-full gap-4 flex justify-center items-center'>

      <i className="    cursor-pointer fa-solid fa-user text-xl hover:text-orange-300 transition-all delay-100"></i>
      <i className="cursor-pointer fa-solid fa-cart-shopping text-xl hover:text-orange-300 transition-all delay-100"></i>
      <i className=" cursor-pointer fa-solid fa-star text-xl hover:text-orange-300 transition-all delay-100"></i>
      </div>
      </div>
    </div>
  )
}

export default Header
