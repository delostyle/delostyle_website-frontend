import React, { useState, useEffect } from 'react';
import frontend from '../../images/frontend.png';
import desktop from '../../images/desktop.png';
import mobile from '../../images/mobile.png';
import ecom from '../../images/ecom.png';
import staff from '../../images/staff.png';
import data from '../../images/data.png';

const services = [
  { icon: frontend, title: 'Frontend Development' },
  { icon: desktop, title: 'Web Application Development' },
  { icon: mobile, title: 'Mobile App Development' },
  { icon: ecom, title: 'E-commerce Development' },
  { icon: staff, title: 'Staff Augmentation' },
  { icon: data, title: 'Data Science' },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

  const handleToggle = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      setIsMediumScreen(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCards = showAll || !isSmallScreen ? services : services.slice(0, 4);

  return (
    <div className="relative z-10 p-4 sm:p-6 lg:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-10">
        {visibleCards.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center bg-white p-4 sm:p-6 lg:p-8 rounded-lg text-center shadow-lg 
              hover:bg-[#f3f4f6] transition-colors duration-300 ease-in-out`}
            style={{
              height: isSmallScreen ? "auto" : isMediumScreen ? "25vh" : "30vh",
              width: isSmallScreen ? "auto" : isMediumScreen ? "22vh" : "27vh",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="mb-4">
              <img 
                src={service.icon} 
                alt={service.title} 
                className="w-12 h-12 sm:w-15 sm:h-15 md:w-18 md:h-18 lg:w-20 lg:h-20" 
              />
            </div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">{service.title}</h2>
          </div>
        ))}
      </div>

      {isSmallScreen && (
        <div className="flex justify-center mt-6">
          {!showAll && services.length > 4 && (
            <button
              onClick={handleToggle}
              className="p-2 w-[250px] sm:w-[200px] md:w-[230px] lg:w-[250px] border-2 border-[#FF6600] text-[#FF6600] rounded-full bg-white"
            >
              See all
            </button>
          )}
          {showAll && (
            <button
              onClick={handleToggle}
              className="p-2 w-[250px] sm:w-[200px] md:w-[230px] lg:w-[250px] border-2 border-[#FF6600] text-[#FF6600] rounded-full bg-white"
            >
              Show less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
