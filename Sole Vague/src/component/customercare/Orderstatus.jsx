import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import "./Orderstatus.css"
import FooterLogo from '../Home/FooterLogo'
import { NavLink } from 'react-router-dom'
const Orderstatus = () => {
  return (
    <div>
      <Header/>
      <div className='w-screen h-[110%]'>
      <p className='ml-14 m-3 '> <NavLink className="text-blue-500" to="/">SoleVague</NavLink>  &gt;  Shipping</p>
<h1 className='text-2xl text-black m-5'>Check Order Status</h1>
<h3 className='text-center text-sm text-gray-400 m-5'>Order number is in your confirmation email</h3>
<div className='mx-auto w-[30%] h-[40vh]  '>
<input type="number" className=' order relative placeholder:absolute border m-3 border-black h-[40px] placeholder:text-sm placeholder:text-black bg-[#f5f5f5]' placeholder='Order Number'  />
<input type="email" className='order border m-3 border-black h-[40px] placeholder:text-sm placeholder:text-black bg-[#f5f5f5]' placeholder='Email Address' />
<button type='submit' className=' bg-black m-3 text-white w-[100%] h-[40px] hover:bg-gray-500 duration-75' >Search</button>
</div>

      <div className='bg-[#EEEEEE] h-[1px] mx-auto mt-[50px] w-[50%]'>

      </div>
      <h2 className='text-center m-3'>Have an account ?</h2>
      <p className='text-center text-sm text-[black] font-medium'>Sign Infor faster checkout and order history review.</p>
      <div className='bg-[#EEEEEE] h-[1px] mx-auto mt-[50px] w-[50%]'>

</div>
      <div className='mt-10'>

      
        <FooterLogo/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Orderstatus
