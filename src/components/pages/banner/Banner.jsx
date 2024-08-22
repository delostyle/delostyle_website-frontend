import React, { useEffect, useState } from 'react';
import "./banner.css"
import bulbIcon from "../../images/bulbIcon.png"
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
  className="hero-section flex items-center h-[300px] sm:h-auto md:h-screen relative overflow-hidden bg-[#00274D] sm:bg-cover sm:bg-center"
  style={{ backgroundImage: width >= 640 && `url(${load ? hero : bannerData?.backgroundImage})` }}
>
      <div className="rounded-lg shadow-lg relative z-10 changes_banner">
        <div className="flex mobile-view flex-col items-center justify-center min-h-screen text-center">
          <div className="mx-10 mb-10 sm:mb-10 sm:mx-10">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-2 md:mb-4 lg:mb-10">
              <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12" />
              <h2 className="text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl ml-0 sm:ml-4 mt-4 sm:mt-0">
                {load ? "WELCOME TO DELOSTYLE STUDIO" : bannerData?.welcomeText}
              </h2>
            </div>
            <div className="flex flex-col items-start">
  <h2 className="font-bold text-white overflow-hidden text-3xl sm:text-5xl md:text-7xl py-1 sm:py-2">
    {load ? "Your Vision" : bannerData?.visionText}
  </h2>
  <h2 className="font-bold text-white overflow-hidden text-3xl sm:text-5xl md:text-7xl py-1 sm:py-2">
    {load ? "Our Passion" : bannerData?.passionText}
  </h2>
  <p className="text-white mt-2 text-center sm:mt-3 md:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl py-2 sm:py-4 md:py-6">
    {load ? "Consulting expertise that helps your business thrive" : bannerData?.descriptionText}
  </p>
  <button className="bg-orange-500 text-white py-2 px-4 sm:px-6 rounded-full mt-3 sm:mt-5" style={{ fontSize: "16px", sm: { fontSize: "20px" } }}>
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
