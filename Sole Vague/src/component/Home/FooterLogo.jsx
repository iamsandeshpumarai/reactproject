import React from 'react'
import Shipping from '../../../footerlogo/free-shipping.png'
import Help from '../../../footerlogo/conversation.png'
import Order from '../../../footerlogo/box.png'
import Exchange from '../../../footerlogo/Transfer.png'
import {  useNavigate} from 'react-router-dom'

const FooterLogo = () => {
  const navigate = useNavigate()
  return (
    <div className='w-100% h-[22vh] items-center justify-center'>
      
    <div  className='group w-[93%] mx-auto h-[17vh] flex gap-10 justify-center group-hover:cursor-pointer'>
        <div onClick={()=>{
      navigate('/shipping')
    }} className=' cursor-pointer shipping mx-5 w-[20%] border h-[100%] flex flex-col justify-center items-center hover:bg-[#DDDDDD] bg-[#F5f5f5]'>
          <img src={Shipping}  className='w-[25%] h-[45%]' alt="" />
          <h2 className='text-2xl font-medium'>  Shipping Info</h2>
        </div>

        <div onClick={()=>{
      navigate('/status')
    }} className='cursor-pointer w-[20%] mx-5 border h-[100%]  flex flex-col justify-center items-center hover:bg-[#DDDDDD] bg-[#F5f5f5]'>
          <img src={Order} className='w-[25%] h-[45%]' alt="" />
          <h2 className='mt-2 text-2xl font-medium'>Order Status</h2>
        </div>
        <div 
        onClick={()=>{
          navigate('/return')
        }}
        className='cursor-pointer w-[20%] mx-5 border h-[100%]  flex flex-col justify-center items-center hover:bg-[#DDDDDD] bg-[#F5f5f5]'>
          <img src={Exchange} className='font-medium w-[25%] h-[45%]' alt="" />
          <h2 className='mt-2 text-2xl font-medium'>Exchange</h2>
        </div>
        <div 
        onClick={()=>{
          navigate('/help')
        }}
        className='cursor-pointer shipping w-[20%] mx-5 h-[100%]  flex flex-col justify-center items-center hover:bg-[#DDDDDD] bg-[#F5f5f5]'>
          <img src={Help} className='w-[25%] h-[45%]' alt="" />
          <h2 className='mt-2 text-2xl font-medium'>Help</h2>
        </div>
    </div>
    </div>
  )
}

export default FooterLogo
