import React, { useEffect, useState } from 'react';
import "./banner.css"
import bulbIcon from "../../images/bulbIcon.png"
import arrow1 from "../../images/arrow2.png"
import arrow2 from "../../images/arrow2.png"
import hero from "../../images/hero.jpg"

const Banner = ({ data, loading }) => {
  const [bannerData, setBannerData] = useState({})
  const [load, setLoading] = useState(loading)
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setBannerData(data?.bannerData)
    setLoading(loading)
  }, [data])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
  className="hero-section  flex items-left h-[300px] sm:h-auto md:h-screen relative overflow-hidden bg-[#00274D] sm:bg-cover sm:bg-center"
  style={{ backgroundImage: width >= 640 && `url(${load ? hero : bannerData?.backgroundImage})` }}
>
      <div className=" changes_banner rounded-lg shadow-lg relative z-10  sm:mx-[80px] sm:pl-[40px]">
  <div className="flex mobile-view flex-col items-left justify-center min-h-screen text-left">
    <div className=" changes mx-10 mb-10 sm:mb-10 sm:mx-4">
      <div className="heading-blb flex flex-col sm:flex-row items-left mb-4 sm:mb-2 md:mb-4 lg:mb-10">
        <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12" />
        <h2 className="text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl ml-0 sm:ml-4 mt-4 sm:mt-0">
          {load ? "WELCOME TO DELOSTYLE STUDIO" : bannerData?.welcomeText}
        </h2>
      </div>
      <div className="flex flex-col items-start sm:items-left"> {/* Align items left below 641px */}
        <h2  className="heading-home font-bold text-white overflow-hidden text-3xl sm:text-5xl md:text-7xl py-1 sm:py-2 text-left">
          {load ? "Your Vision" : bannerData?.visionText}
        </h2>
        <h2  className= "heading-home font-bold text-white overflow-hidden text-3xl sm:text-5xl md:text-7xl py-1 sm:py-2 text-left">
          {load ? "Our Passion here" : bannerData?.passionText}
        </h2>

        <p className=" yoyo text-white mt-2  sm:text-left sm:mt-3 md:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl py-2  md:py-6">
          {load ? "Consulting expertise that helps your business thrive" : bannerData?.descriptionText}
        </p>
        <button className=" heading-home bg-orange-500 text-white py-2 px-4 sm:px-6 rounded-2xl mt-3 sm:mt-5 text-[16px] sm:text-[20px]">
          {load ? "Let's get together" : bannerData?.buttonText}
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Banner;
