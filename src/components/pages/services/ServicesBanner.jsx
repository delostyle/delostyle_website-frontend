import React, { useState, useEffect } from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import service1 from "../../images/service1.png";

const ServicesBanner = ({ data, loading }) => {
  const [servicesBannerData, setServicesBannerData] = useState({});
  const [load, setLoading] = useState(loading);

  useEffect(() => {
    setServicesBannerData(data?.servicesBannerData);
    setLoading(loading);
  }, [data]);

  return (
    <div
      className="consulting-banner relative bg-blue-50 flex bg-center bg-no-repeat bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${load ? service1 : servicesBannerData?.backgroundImage})`,
        backgroundColor: "#00274D96",
        width: "100%",
        minHeight: "50vh",
        height: "auto"
      }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-75"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-20 text-white">
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-3 sm:space-y-4 md:space-y-6">
          <div className="flex items-center mb-4">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
            />
            <h2
              className="text-orange-500 text-sm sm:text-lg md:text-xl ml-2 md:ml-4"
            >
              OUR SERVICES
            </h2>
          </div>
          <h2
            className="text-white font-bold leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
          >
            {load
              ?   "We Are Expert Consulting With A Global Perspective"
              : servicesBannerData?.text2}
          </h2>
          <p
            className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-4"
          >
            {load
              ? "We are a dedicated team and our comprehensive services are designed to meet the diverse needs of our clients, offering tailored solutions that drive success and growth."
              : servicesBannerData?.text1}
          </p>
          <button
            className="bg-orange-500 text-white py-2 px-4 sm:px-6 rounded-full mt-6 md:mt-8 text-sm sm:text-base lg:text-lg"
          >
            {load ? "Let's get together" : servicesBannerData?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
