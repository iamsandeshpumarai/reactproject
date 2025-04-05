import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import { div } from 'framer-motion/client';
import { NavLink } from 'react-router-dom';

const returnsAndExchangesFAQ = [
    {
      question: "How long will my return take?",
      answer: "Returns typically take 5-7 business days to process after we receive the item. Refunds will be issued within 3-5 business days after processing."
    },
    {
      question: "What’s your policy on refunds?",
      answer: "We offer full refunds for unworn and undamaged shoes within 7 days of delivery. The refund will be processed to the original payment method."
    },
    {
      question: "What do I need to know about return shipping fees?",
      answer: "Customers are responsible for return shipping costs unless the item is defective or incorrect. For defective items, we provide a free return shipping label."
    },
    {
      question: "What’s the policy for returns?",
      answer: "The item must be unused and in original packaging. Returns must be requested within 7 days of delivery. Items with visible wear, damage, or missing packaging may not be accepted."
    }
  ];
  const returnsAndExchangesFAQ1 = [
    {
      key: "How do I start a return or exchange?",
      value: [
        "Contact us via email or phone with your order details.",
        "We will verify your request and provide return instructions.",
        "Ship the item to our Kathmandu return address.",
        "Once received, we will process the return or exchange."
      ]
    },
    {
      key: "What if I believe my item is defective?",
      value: [
        "If your item is defective or incorrect, send us clear photos and order details.",
        "After verification, we will arrange a free replacement or refund."
      ]
    }
  ];
  const returnsAndExchangesFAQ2=[
    {
        key: "Do you offer international returns and exchanges?",
        value: [
          "Yes! International customers can return or exchange items. However:",
          "Customers are responsible for international shipping fees and duties.",
          "Refunds will be processed after we receive the item."
        ]
      }
    
  ]


const Return = () => {
  return (
    <div>
    <Header/>
    <div className='  w-[95%] mx-auto  p-4'>
    <p className='mb-4 '> <NavLink className="text-blue-500" to="/">SoleVague</NavLink>  &gt;  Returns&Exchange</p>
<h1 className='text-left  text-2xl mb-4 text-black font-bold'> Returns And Exchanges </h1>
        <div className="space-y-4">
          <h2 className='font-normal text-black text-2xl'>Other Important Information</h2>
          {returnsAndExchangesFAQ.map((item, index) => ( <div key={index} >

            <details  className=" p-2 rounded-lg">
              <summary className="cursor-pointer font-semibold">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
            <div className='w-[100%] h-[0.5px] bg-[#dedbdb] mt-6'></div>
          </div>
          ))}
        </div>
        <div className="space-y-4">
        <h2 className='font-normal text-2xl text-black'>Returns & Exchanges FAQ</h2>
      {returnsAndExchangesFAQ1.map((item, index) => (
        <div key={index}>
        <details className='cursor-pointer' >
          <summary>{item.key}</summary>
          <p>
            {Array.isArray(item.value)
              ? item.value.map((answer, idx) => <ul key={idx}> <li>{answer}</li> </ul>)
              : item.value}
          </p>
        </details>
         <div className='w-[100%] h-[0.5px] bg-[#dedbdb] mt-6'></div>
              </div>
      ))}
        </div>
        <div className="space-y-4 ">
          <h2 className='font-normal text-2xl'>International Return & Exchange Instructions</h2>
          {returnsAndExchangesFAQ2.map((item, index) => (
            <div key={index}>

            <details key={index} className=" p-2 rounded-lg">
              <summary className="cursor-pointer font-semibold">{item.key}</summary>
              <ul className="mt-2 text-gray-700"> {item.value.map((items,i)=><li key={i}>{items}</li>) }</ul>
            </details>
            
            </div>
          ))}
        </div>



    </div>
    <Footer/>
    </div>
  )
}

export default Return
