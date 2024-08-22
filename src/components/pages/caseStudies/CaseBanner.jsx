import React, { useState, useEffect } from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import caseBanner from "../../images/caseBanner.png";

const CaseBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bannerStyle = {
    backgroundImage: isMobile ? 'none' : `url(${caseBanner})`,
    backgroundColor: isMobile ? '#00274D' : 'transparent',
    width: '100%',
    height: 'auto',
    minHeight: '600px',
  };

  return (
    <div
      className="relative flex bg-center bg-no-repeat bg-cover"
      style={bannerStyle}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-65"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-4 md:mx-16 lg:mx-20 text-white">
        <div className="w-full md:w-3/4 lg:w-2/3 mt-8 md:mt-10 p-4 md:p-8 lg:p-10">
          <div className="flex mb-5 md:mb-5 items-center">
            <img src={bulbIcon} alt="bulb-icon" className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
            <h2 className="text-orange-500 text-md md:text-lg lg:text-xl ml-3 md:ml-4">CASE STUDIES</h2>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white justify-start mb-4 font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
              We Ensure Client Satisfaction Through Diligent Effort And Expertise
            </h2>
            <p className="text-white mt-4 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
              Explore our case studies to see how our dedicated approach has consistently delivered results that exceed expectations.
            </p>
            <div className="flex justify-start w-full"> {/* Added this div to align the button to the left */}
    <button className="bg-orange-500 text-white py-2 px-4 md:px-5 lg:px-6 rounded-full mt-6 md:mt-8 text-sm md:text-lg lg:text-xl">
      Let's get together
    </button>
  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseBanner;
