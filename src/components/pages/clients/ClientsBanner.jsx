import React, { useState, useEffect } from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import clientBanner from "../../images/clientBanner1.png";

const ClientsBanner = ({data,loading}) => {
  const [client_BannerData, setClient_BannerData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setClient_BannerData(data?.client_BannerData)
    setLoading(loading)
  }, [data])
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bannerStyle = {
    backgroundImage: isMobile ? 'none' : `url(${clientBanner})`,
    backgroundColor: isMobile ? '#00274D' : 'transparent',
    width: '100%',
    height: 'auto',
    minHeight: '300px',
  };

  return (
    <div
      className="relative flex bg-center bg-no-repeat bg-cover"
      style={bannerStyle}
    >
      <div className={`absolute inset-0 ${isMobile ? 'bg-[#00274D] bg-opacity-100' : 'bg-[#00274D] bg-opacity-50'}`}></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20 text-white py-6 md:py-12 lg:py-20">
        <div className="flex flex-col items-start text-center md:text-left w-full md:w-3/4 lg:w-1/2">
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-6">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon w-8 md:w-10" />
            <h2 className="text-orange-500 text-lg md:text-xl ml-4">OUR CLIENTS</h2>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-white overflow-hidden py-2 font-bold mb-3 md:mb-5 text-2xl md:text-4xl lg:text-5xl leading-relaxed lg:w-[800px]">
            {load ? "We Pride Ourselves On Exceeding Our Client's Expectations" : client_BannerData?.pride}
            
            </h2>
            <p className="text-white mt-3 md:mt-5 text-base md:text-xl lg:text-2xl text-center md:text-left">
            {load ? "   Our commitment to excellence has allowed us to build strong relationships with a diverse range of clients. Here, you can find some of the clients we have worked with." : client_BannerData?.commitment}
           
            </p>
            <div className="w-full flex justify-center md:justify-start mt-5 md:mt-8">
              <button className="bg-orange-500 text-white py-2 px-4 md:px-6 rounded-full text-sm md:text-lg lg:text-xl">
               
                Let's get together
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsBanner;