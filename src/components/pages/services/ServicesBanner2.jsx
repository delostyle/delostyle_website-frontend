import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import serviceBanner2 from "../../images/serviceBanner2.png";

export default function ServicesBanner2({ data, loading }) {
  const [serviceBanner2Data, setServiceBanner2Data] = useState({});
  const [load, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setServiceBanner2Data(data.serviceBanner2Data || {});
    }
    setLoading(loading);
  }, [data, loading]);

  return (
    <div
      className="consulting-banner relative flex bg-center bg-no-repeat bg-cover mt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${serviceBanner2})`,
        backgroundColor: "#00274D96",
        width: "100%",
        height: "auto",
        minHeight: "50vh",
      }}
    >
      <div className="absolute inset-0 bg-[#0258FF4D] bg-opacity-30"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-10 lg:py-20 text-white">
        <div className="w-full md:w-3/4 lg:w-1/2 items-start mt-10 md:mt-20 p-5 sm:p-8">
          <div className="flex items-center mb-4 sm:mb-6">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
            />
            <h2 className="text-orange-500 text-sm sm:text-lg md:text-xl ml-2 sm:ml-4">
              WHAT WE DO
            </h2>
          </div>
          <div className="flex flex-col items-start space-y-3 sm:space-y-4">
            <h2 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {load && serviceBanner2Data?.text1
                ? "Transforming Your Ideas Into Reality By Empowering Innovation"
                : serviceBanner2Data.text1}
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-4">
              {load && serviceBanner2Data?.text2
                ? "If you have the idea, we will guide you through the process. We're here to provide you with the best possible resources to help visualize your ideas and bring them to life. Partner with us to turn your vision into reality with expert support every step of the way."
                : serviceBanner2Data.text2}
            </p>
            <button className="bg-orange-500 text-white py-2 px-4 sm:px-6 rounded-full mt-6 md:mt-8 text-sm sm:text-base lg:text-lg">
              {load && serviceBanner2Data?.buttonText
                ? "Know About Our Services"
                : serviceBanner2Data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
