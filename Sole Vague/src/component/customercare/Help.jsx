import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import FooterLogo from '../Home/FooterLogo'

const Help = () => {
  return (
    <div>
      <Header/>
      <div className='w-screen '>
<div className='w-screen h-[20vh] bg-black flex justify-center items-center flex-col'>
<h2 className='text-white font-normal text-lg mb-3'>Hi, there. What are you looking for ?</h2>
<input className='w-[40vw] h-[5vh] placeholder:font-normal' type="text" placeholder='search'  />
</div>
<div className='m-10'>

<FooterLogo/>
</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Help
