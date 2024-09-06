import React, { useState, useEffect } from 'react';
import banner2 from "../../images/banner2.jpg";
import bulbIcon from "../../images/bulbIcon.png";
import bannerDots from "../../images/bannerDots.png";
import Stepper from './Stepper';

const ConsultingSteps = ({ data, loading }) => {
  const [consultingData, setConsultingData] = useState({});
  const [load, setLoading] = useState(loading);

  useEffect(() => {
    setConsultingData(data?.consultingData);
    setLoading(loading);
  }, [data, loading]);

  return (
    <div 
      className="consulting-banner relative bg-blue-50 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${banner2})`, backgroundColor: "#00274D96", marginTop: 0, paddingTop: 0 }}
    >
      {/* Adding the overlay backgrounds */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between text-white lg:h-[600px] md:h-[685px] h-auto">
        
        {/* Left section */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center p-4 md:p-8 lg:p-12 relative lg:left-[50px]">
          <div className="flex items-center mb-4">
            <img src={bulbIcon} alt="bulb-icon" className="h-6 w-6 md:h-8 md:w-8" />
            <h2 className="text-orange-500 text-sm md:text-lg lg:text-xl ml-2 md:ml-4">OUR PROCESS</h2>
          </div>
          <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-3">
            {load ? "Steps Of Consulting" : consultingData?.headingText}
          </h1>
          <p className="text-white text-sm md:text-base lg:text-lg mb-4 md:mb-6">
            {load ? "We can help you with picking the best people for your company" : consultingData?.paragraphText}
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 md:px-5 rounded-2xl text-xs md:text-sm lg:text-base w-full md:w-72 text-center">
            {load ? "Online Application" : consultingData?.buttonText}
          </button>
        </div>

        {/* Right section (Stepper + background) */}
        <div className="relative lg:w-1/2 w-full flex justify-center lg:justify-end items-center p-4 lg:pr-12 lg:left-[50px]">
          <div className="bg-white bg-opacity-80 p-4 md:p-8 rounded-lg shadow-lg w-full max-w-[1200px] h-auto lg:h-[450px]">
            {/* Banner dots */}
            <div className="relative">
              <div className="absolute top-0 left-0 lg:block hidden">
                <img src={bannerDots} alt="dotted-bg" className="h-[260px] w-[100px]" />
              </div>
              {/* Stepper Component */}
              <div className="relative lg:left-[100px] left-0">
                <Stepper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingSteps;
