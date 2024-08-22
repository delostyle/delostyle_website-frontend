import React, { useEffect, useState } from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import contactForm from "../../images/contactForm.png";
import "../../Style.css";

const ContactForm = ({data, loading}) => {
  const [contact_FormData, setContact_FormData] = useState({});
  const [load, setLoading] = useState(loading);

  useEffect(()=>{
    setContact_FormData(data?.contact_FormData);
    setLoading(loading);
  }, [data]);

  return (
    <div 
      className="consulting-banner relative flex flex-col md:flex-row bg-center bg-no-repeat bg-cover mt-20"
      style={{
        background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-5 lg:mx-20 text-white">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left gap-10 p-5">
          <div className="flex mb-5 items-center mt-10">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
            <h2 className="text-orange-500 text-xl " style={{ fontSize: "20px"}}>LET’S CONNECT</h2>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-white py-2 font-bold text-3xl md:text-5xl">
              {load ? "Get in Touch with Us" : contact_FormData.get_in}
            </h1>
            <p className="mt-1 text-lg md:text-xl lg:text-2xl leading-relaxed">
              {load ? "Leave us a little info, and we'll be in touch. Whether you have questions, need more information, or are ready to start a project, we're here to help." : contact_FormData.leave_us}
            </p>
            <img src={contactForm} alt='contact-form' className="mt-6 md:mt-10 h-64 md:h-80 lg:h-96" />
          </div>
        </div>

        {/* Responsive Form */}
        <div className="w-full md:w-1/2 p-5 mt-10 md:mt-0 bg-white rounded-lg shadow-lg flex justify-center m-10">
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2" style={{ color: "#00274D" }}>Name*</label>
              <input type="text" id="name" name="name" className="bg-white border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:border-orange-500" style={{ borderColor: "#CCCBCB", borderWidth: "1px" }} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2" style={{ color: "#00274D" }}>Your Email*</label>
              <input type="email" id="email" name="email" className="bg-white border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:border-orange-500" style={{ borderColor: "#CCCBCB", borderWidth: "1px" }} />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-lg font-medium mb-2" style={{ color: "#00274D" }}>Subject (Optional)</label>
              <input type="text" id="subject" name="subject" className="bg-white border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:border-orange-500" style={{ borderColor: "#CCCBCB", borderWidth: "1px" }} />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2" style={{ color: "#00274D" }}>Project Details</label>
              <textarea id="message" name="message" rows="4" className="bg-white border border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:border-orange-500" style={{ borderColor: "#CCCBCB", borderWidth: "1px" }}></textarea>
            </div>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-5 text-lg md:text-xl w-full md:w-auto">
              Send a Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
