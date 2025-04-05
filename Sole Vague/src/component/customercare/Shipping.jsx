import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { NavLink } from 'react-router-dom';
import { div } from 'framer-motion/client';

const shippingFAQ = [
  {
    question: "How can I manage my delivery?",
    answer: "You can manage your delivery by logging into your account and updating the delivery address or contacting our customer service for any special delivery instructions."
  },
  {
    question: "How much does 1 Business Day - Overnight shipping cost?",
    answer: "Overnight shipping typically costs between $15-$25, depending on the size and weight of your order. The final shipping cost will be displayed during checkout."
  },
  {
    question: "How much does 2 Business Day - Express shipping cost?",
    answer: "2 Business Day Express shipping generally costs between $10-$20. The actual cost will depend on the item and location."
  },
  {
    question: "Express Delivery Timetable",
    answer: "Express delivery orders are processed within 24 hours. You will receive a tracking number once the shipment is on its way."
  },
  {
    question: "How long does it take for my order to ship out from your distribution center?",
    answer: "Orders are processed within 1-2 business days after the order is placed. Shipping times vary depending on the shipping method chosen at checkout."
  },
  {
    question: "My home doesn’t have a street address. What should I do?",
    answer: "If you don’t have a street address, please use a valid postal address or a delivery point (like a PO Box or a local courier office) when placing your order. Alternatively, reach out to customer support for help."
  }
];
const orderingAndShippingFAQ = [
  {
    question: "Why Was My Order Cancelled?",
    answer: "Your order may be cancelled for several reasons, such as insufficient payment information, out-of-stock items, or delivery restrictions. If you believe there was an error, please contact our customer service."
  },
  {
    question: "Learn about paying with Klarna",
    answer: "Klarna is a payment provider that allows you to split your payments over time or pay for your order in installments. Choose Klarna as your payment option at checkout for more details."
  },
  {
    question: "Why can't I ship my order outside the United States?",
    answer: "Currently, we only offer shipping within the United States due to logistical reasons. We are working on expanding our shipping options to international destinations in the future."
  },
  {
    question: "What is a credit card security code (CVV)?",
    answer: "The CVV is a 3-digit code found on the back of your credit card, usually located next to the signature panel. This code provides an extra layer of security for online transactions."
  },
  {
    question: "What payment methods do you accept by phone?",
    answer: "We accept credit and debit card payments by phone. Please call our customer service to process payments securely."
  },
  {
    question: "How do debit & credit card transactions work?",
    answer: "Debit and credit card transactions are processed by a secure payment gateway. Upon checkout, you will enter your card details, and the payment will be processed immediately. Debit cards will deduct the amount directly from your bank account, while credit cards will add the transaction to your balance."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Klarna for online orders. For phone orders, we accept credit/debit card payments."
  }
];

const orderingCostsFAQ = [
  {
    question: "What are your tax rates and guidelines?",
    answer: "Sales tax is calculated based on the shipping address of your order. The applicable tax will be displayed during checkout."
  },
  {
    question: "Can I receive a sale price adjustment on a previous purchase?",
    answer: "Unfortunately, we do not offer price adjustments for previous purchases. We recommend checking our website regularly for new sales and promotions."
  },
  {
    question: "Can I change or cancel an order?",
    answer: "You can change or cancel your order within 1 hour of placing it. After this period, we are unable to make any changes as the order may already be processed."
  },
  {
    question: "Why are multiple charges appearing on my debit/credit account?",
    answer: "Multiple charges may appear if your order is split into several shipments. You will only be charged once for the full amount, but payments may be processed separately by our shipping team."
  },
  {
    question: "What’s the purpose of the Colorado retail de?",
    answer: "This refers to the specific retail regulations for the state of Colorado, which require certain businesses to collect sales tax on online orders. More information can be found in our terms of service."
  }
];


const Shipping = () => {
  return (
    <div>
      <Header />
      <p className='ml-14 m-3'> <NavLink className="text-blue-500" to="/">SoleVague</NavLink>  &gt;  Shipping</p>
      <div className=' w-[95%] p-4 mx-auto mb-9 '>
        <h1 className='text-left font-bold text-2xl mb-4'>Order and Shipping</h1>
        <div className="space-y-4">
          <h2 className='font-normal text-2xl'>shipping FAQ</h2>
          {shippingFAQ.map((item, index) => (
            <div key={index}>

            <details  className=" p-2 rounded-lg">
              <summary className="cursor-pointer font-semibold">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
            <div className='w-[100%] h-[0.5px] bg-[#dedbdb] mt-6'></div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className='font-normal text-2xl'>Ordering And Shipping FAQ</h2>
          {orderingAndShippingFAQ.map((item, index) => (
          <div key={index}>
            <details  className=" p-2 rounded-lg">
              <summary className="cursor-pointer font-semibold">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
            <div className='w-[100%] h-[0.5px] bg-[#dedbdb] mt-6'></div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className='font-normal text-2xl'>ordering Costs FAQ</h2>
          {orderingCostsFAQ.map((item, index) => (
            <div key={index}>

            <details  className=" p-2 rounded-lg">
              <summary className="cursor-pointer font-semibold">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
            <div className='w-[100%] h-[0.5px] bg-[#dedbdb] mt-6'></div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shipping;
