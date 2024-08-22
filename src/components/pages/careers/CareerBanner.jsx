import React, { useState, useEffect } from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import careerBanner from "../../images/careerBanner.png";

const CareerBanner = ({data,loading}) => {
  const [carrer_BannerData, setCarrer_BannerData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setCarrer_BannerData(data?.carrer_BannerData)
    setLoading(loading)
  }, [data])
  console.log(carrer_BannerData)
  console.log(load);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bannerStyle = {
    backgroundImage: isMobile ? 'none' : `url(${load ? careerBanner : carrer_BannerData?.backgroundImage})`,
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
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between mx-5 md:mx-10 lg:mx-20 text-white">
        
        <div className="w-full mt-10 p-5 md:mt-20">
          <div className="flex mb-5">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />
            <h2 className="text-orange-500 text-xl ml-4" style={{ fontSize: "20px" }}>CAREERS</h2>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white overflow-hidden py-2 font-bold mb-2" style={{ fontSize: isMobile ? "36px" : "60px", textAlign: 'left' }}>
            {load ? " We Believe In The Power Of Teamwork" : carrer_BannerData?.Believe}
           </h2>
            <p className="text-gray-700 text-white mt-5 overflow-hidden" style={{ fontSize: isMobile ? "18px" : "24px", textAlign: 'left' }}>
            {load ? "  Our collaborative environment fosters innovation and excellence, enabling our team to consistently deliver outstanding results." : carrer_BannerData?.collaborative}
          </p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10" style={{ fontSize: "20px", textAlign: 'left' }}>Let's get together</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareerBanner;
