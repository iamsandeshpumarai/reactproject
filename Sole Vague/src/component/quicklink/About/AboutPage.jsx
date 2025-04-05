
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Testimonial from "./Testamonial";

const AboutUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1 }
    }
  };

  return (
    <div className=" bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-neutral-100">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            filter: "brightness(0.7)"
          }} 
        />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            OUR JOURNEY
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
Selling premium footwear since 2010—where tradition meets innovative style.
          </motion.p>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => {
            document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown size={36} />
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.img 
                src="http://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our workshop" 
                className="rounded-lg shadow-xl w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
                <div className="w-20 h-1 bg-gray-800 mb-8"></div>
                <p className="text-lg text-gray-600 mb-6">
                Our journey began with a single step and a dream—to redefine comfort, style, and quality in footwear. What started as a small passion project quickly grew into a thriving enterprise, thanks to our relentless dedication and love for shoes. We believe that shoes are not just an accessory but an extension of your personality and a crucial part of your everyday adventures.

Over the years, we have carefully curated a collection that combines timeless craftsmanship with modern design. Every pair we offer is a product of meticulous attention to detail, innovative technology, and an unwavering commitment to quality. Our success is driven by our valued customers, whose feedback and support inspire us to continually raise the bar.
                </p>
                <p className="text-lg text-gray-600">
                Today, we stand proud as one of the best sellers in the industry, always striving to create footwear that not only complements your style but also empowers you to take on the world—one confident step at a time.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div>
<h1 className="text-center text-3xl font-bold mb-5 text-red-500">Testamonial</h1>
<Testimonial/>
      </div>
      
    </div>
    
  );
};



export default AboutUs;