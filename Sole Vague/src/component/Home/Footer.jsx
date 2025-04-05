
import { NavLink } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className=" text-black py-8   bg-gray-100 relative bottom-0 w-full ">
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Branding & About */}


        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 ml-9">
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <NavLink to="/" className="hover:text-gray-600">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-600">About Us</NavLink>
          
          <NavLink to="/policy" className="hover:text-gray-600">Privacy Policy</NavLink>
          <NavLink to="/contact" className="hover:text-gray-600">Contact us</NavLink>
          <NavLink to="/terms" className="hover:text-gray-600">Terms Of Use</NavLink>
          
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-2xl">Contact</h1>
          <p className="flex "> <FaEnvelope className="mr-2"/> support@solevague.com</p>
          <p className="flex"><FaPhone className="mr-1 scale-x-[-1]"  /> <span>+977 123-456789</span> </p>
          <p className="flex"> <FaPhone className="mr-1" style={{ transform: 'scaleX(-1)' }} /> <span>Phone: +977 123-789890</span></p>
          <p className="flex">< FaMapMarkerAlt className="mr-1" /> <span>Kathmandu,Nepal</span></p>
        </div>

        {/* Social Media Links */}
        <div className=" space-x-4 mt-4 md:mt-0 flex flex-col mr-9">
          <h1 className="text-2xl semi-bold">Follow Us</h1>
          <a href="#" className="text-xl hover:text-gray-600"><i className="text-3xl fa-brands fa-facebook"></i></a>
          <a href="#" className="text-xl hover:text-gray-600">
          <i className=" text-3xl fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-600"><i className="text-3xl fa-brands fa-twitter"></i></a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 border-t border-gray-300 pt-4">
        <p>© 2025 SoleVague. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
