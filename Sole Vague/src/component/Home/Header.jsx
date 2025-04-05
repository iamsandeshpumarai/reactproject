import React from 'react';
import logo from '../../../image/logo/brandlogos.png';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='flex w-screen h-[12vh] justify-center items-center bg-[#F1F2F2]'>
      <div  className='logo w-1/3 h-full ' onClick={()=>{
navigate('/')
          }} >
        <div className='w-full h-full logos flex items-center justify-center'>
          <img  className='h-[120px] w-[120px] ml-4' src={logo} alt="" />
        </div>
      </div>
      <div className='menu logo w-1/3 h-full'>
        <ul className='menu-list h-full w-full flex gap-6 justify-center items-center'>
        
        <li className="cursor-pointer text-xl">
  <NavLink to="/men" className={({isActive})=>isActive ? "text-orange-300":""}>Men</NavLink>
</li>
        <li className="cursor-pointer text-xl">
  <NavLink to="/women" className={({isActive})=>isActive ? "text-orange-300":""}>Women</NavLink>
</li>
        <li className="cursor-pointer text-xl">
  <NavLink to="/Kid" className={({isActive})=>isActive ? "text-orange-300":""}>Kid</NavLink>
</li>
        <li className="cursor-pointer text-xl">
  <NavLink to="/gym" className={({isActive})=>isActive ? "text-orange-300":""}>Training & Gym</NavLink>
</li>
        
          
          
        </ul>
      </div>
      <div className='flex gap-5 items-center justify-center sub-menu logo w-1/3 h-full'>
        
        <div className='w-1/2 h-full gap-4 flex justify-center items-center'>
          <i className="cursor-pointer fa-solid fa-user text-xl hover:text-orange-300 transition-all delay-100"></i>
          <i className="cursor-pointer fa-solid fa-cart-shopping text-xl hover:text-orange-300 transition-all delay-100"></i>
          <i className="cursor-pointer fa-solid fa-star text-xl hover:text-orange-300 transition-all delay-100"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;