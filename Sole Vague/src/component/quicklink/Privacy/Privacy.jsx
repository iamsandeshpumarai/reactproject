import React from 'react';
import './Privacy.css';
import Header from '../../Home/Header';
import Footer from '../../Home/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <div className="privacy-policy-container">
      <h1 className='underline'>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> April 3, 2025</p>
      
      <p>Welcome to Sole Vague. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>
      
      <h2 className='underline'>1. Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> When you register, place an order, or contact us, we may collect your name, email, phone number, and shipping address.</li>
        <li><strong>Payment Information:</strong> We do not store payment details. All transactions are securely processed through third-party payment providers.</li>
        <li><strong>Browsing Information:</strong> We collect data such as IP address, browser type, and pages visited to improve user experience.</li>
      </ul>
      
      <h2 className='underline'>2. How We Use Your Information</h2>
      <ul>
        <li>To process and fulfill orders.</li>
        <li>To improve our website and customer service.</li>
        <li>To send promotional emails (if you opt-in).</li>
        <li>To prevent fraud and secure transactions.</li>
      </ul>
      
      <h2 className='underline'>3. How We Protect Your Information</h2>
      <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
      
      <h2 className='underline'>4. Sharing Your Information</h2>
      <p>We do not sell or rent your personal data. However, we may share it with:</p>
      <ul>
        <li>Trusted third-party service providers (e.g., payment processors, shipping partners).</li>
        <li>Law enforcement if required by law.</li>
      </ul>
      
      <h2 className='underline'>5. Your Choices</h2>
      <p>You can opt-out of marketing emails and request the deletion of your account and data at any time.</p>
      
      <h2 className='underline'>6. Cookies</h2>
      <p>We use cookies to enhance your experience. You can manage cookie preferences in your browser settings.</p>
      
      <h2 className='underline'>7. Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically. Continued use of the site implies acceptance of any changes.</p>
      
      <h2 className='underline'>8. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, contact us at:</p>
      <p><strong>Email:</strong> support@solevague.com</p>
      <p><strong>Address:</strong> Kathmandu,Nepal</p>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
