import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

import { Truck, RefreshCcw, Gift, Package, ShoppingCart, Heart } from "lucide-react";
import { NavLink } from 'react-router-dom';
const Signup = () => {
  return (
    <div>
      <Header/>
  <form action="">

      <div className='w-screen h-screen  ok bg-[#F5F5F5]'>
        <h2 className='bg-black   text-white text-center mb-[20px] h-[50px] flex  items-center justify-center'>"Sign Up & Enjoy These Benefits"</h2>
<div className='w-full h-[7%] flex mb-5 '>
  
<div className='w-1/3 h-full flex flex-col  justify-center  items-center  '>

<div className=' mb-[-12px]'>

<Gift className=" text-pink-700 text-center "  />  
</div>

<h2 className='ml-2 text-sm  '> <span className='font-bold'>MemberOnly Deals –</span> <span className='font-normal'>Special discounts just for signed-up users</span></h2>




</div>
<div className='w-1/3 h-full flex flex-col  justify-center   items-center  '>

<div className=' mb-[-12px]'>

<RefreshCcw className=" text-pink-700 text-center "  />  
</div>

<h2 className='ml-2 text-sm  '> <span className='font-bold'>Quick Checkout  –</span> <span className='font-normal'>Special discounts just for signed-up users</span></h2>




</div>
<div className='w-1/3 h-full flex flex-col  justify-center  items-center  '>

<div className=' mb-[-12px]'>

<Truck className=" text-pink-700 text-center "  />  
</div>

<h2 className='ml-2  text-sm  ok-black'> <span className='font-bold'>Easy Returns & Exchanges  –</span> <span className='font-normal'> Hassle-free product returns and swaps.</span></h2>



</div>

</div >

<div className='  w-screen  bg-white  '>
  <div className='w-[95%]  mx-auto relative   flex gap-3 bg-white  justify-center '>

  <input type="text" required placeholder='first name' className='bg-[#F5F5F5]  focus:bg-white w-[40%] ml-[2%]  h-[50px]  placeholder:text-sm  placeholder:text-black placeholder:absolute placeholder:focus:top-0 focus:bg-whtie' />
  <input type="text" required placeholder='last name' className=' bg-[#f5f5f5] focus:bg-white w-[40%] h-[50px] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0 ' />
  
  </div>
<input type="email" required placeholder='Email Address' className='focus:bg-white m-2 ml-[12.5%] bg-[#F5F5F5] w-[77%] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0' />
<input type="Number" required placeholder='Phone Number' className='focus:bg-white m-2 ml-[12.5%] bg-[#F5F5F5] w-[77%] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0' />
<input type="Number" required placeholder='ZIP CODE' className='focus:bg-white m-2 ml-[12.5%] bg-[#F5F5F5] w-[77%] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0' />
<input type="Password" required placeholder='Password' className='focus:bg-white m-2 ml-[12.5%] bg-[#F5F5F5] w-[77%] placeholder:text-sm placeholder:text-black placeholder:absolute placeholder:focus:top-0' />
</div>
<div className='flex  justify-start ml-[12%] flex-col mt-4 ' >
  <div  className='bg-white' >

<input type="checkbox" className='w-[19px] mr-2 m-3'  />
<span className='text-sm'>I agree to receive emails from Foot Locker about new products, offers, and events.</span>
  </div>
  <div>


<span className='text-sm'>By joining Member, I agree to the <NavLink  to="/terms" className="text-blue">  <span className='text-blue-900'>Terms Of Use </span> </NavLink>  and the <NavLink to='/policy'><span className='text-blue-900'>Privacy Policy</span></NavLink> and  I understand how my personal information will be handled and protected in accordance with these policies. </span>
  </div>
</div>

<div className='w-full flex flex-col items-center justify-center mt-4'>

<button className='bg-black text-white p-2 border rounded-md m-3'>Join Now</button>
<p className='m-2'>Sole Vogue Member ? <span className='text-blue-700 '>Sign In</span> </p>
</div>
      </div>
      <Footer/>
  </form>
    </div>
  )
}

export default Signup
