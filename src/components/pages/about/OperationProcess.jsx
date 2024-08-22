import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import aboutBanner2 from "../../images/aboutBnner2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import "./about.css";

export default function OperationalProcess({ data, loading }) {
  const [isWebView, setIsWebView] = useState(window.innerWidth > 1024);
  const [operationalData, setOperationalData] = useState(() => {
    // Load from localStorage or use default data
    const savedData = JSON.parse(localStorage.getItem("operationalData"));
    return savedData || {
      headingop: "The Operational Processes Are What Drives The Business",
      subHeadingop: "We specialize in the project delivery model that combines strategy and cutting-edge technology into businesses, hence enabling cost efficiency across the departments.",
    };
  });

  useEffect(() => {
    const handleResize = () => setIsWebView(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);

    // Save data to localStorage whenever data prop changes
    if (data && !loading) {
      setOperationalData(data);
      localStorage.setItem("operationalData", JSON.stringify(data));
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [data, loading]);
  
  console.log(data,"datadfatadatta")

  const translateStyle = isWebView ? { transform: 'translateX(100px)' } : {};

  return (
    <div
      className="consulting-banner relative bg-blue-50 flex bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${aboutBanner2})`, backgroundColor: "#00274D96" }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-4 md:mx-20 text-white">
        <div className="items-start h-full mt-20 p-4 md:p-10 w-full md:w-[990px]" style={translateStyle}>
          <div className="flex mb-10">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
            <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>
              OPERATIONAL PROCESS
            </h2>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white overflow-hidden py-2 font-bold mb-5 text-3xl md:text-5xl lg:text-6xl">
              {operationalData.headingop}
            </h2>
            <p className="text-gray-700 text-white mt-5 overflow-hidden text-lg md:text-xl">
              {operationalData.subHeadingop}
            </p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10 text-lg md:text-xl">
              Watch Story <FontAwesomeIcon icon={faPlay} className="mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
