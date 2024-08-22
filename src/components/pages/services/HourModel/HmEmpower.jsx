import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import empowerBanner from "../../../images/empowerBanner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function HmEmpower({ hourModel }) {
  return (
    <div
      className="consulting-banner relative bg-blue-50 flex bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${empowerBanner})`, backgroundColor: "#00274D96" }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-4 sm:mx-10 lg:mx-20 text-white py-10">
        <div className="items-start h-full mt-10 p-4 sm:p-8 lg:p-10" style={{ maxWidth: "990px" }}>
          <div className="flex mb-6 sm:mb-10">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon w-8 h-8 sm:w-10 sm:h-10 mr-3" />
            <h2 className="text-orange-500 text-lg sm:text-xl ml-4">
              {hourModel?.hmEmpowerData?.subHeading}
            </h2>
          </div>
          <div className="flex flex-col items-start">
            <h2
              className="text-white overflow-hidden py-2 font-bold mb-4 sm:mb-5 text-3xl sm:text-4xl lg:text-5xl"
            >
              {hourModel?.hmEmpowerData?.mainHeading}
            </h2>
            <p className="text-gray-700 text-white mt-3 sm:mt-5 overflow-hidden text-base sm:text-lg lg:text-xl">
              {hourModel?.hmEmpowerData?.descriptionText}
            </p>
            <button className="bg-orange-500 text-white py-2 px-4 sm:px-6 rounded-full mt-6 sm:mt-10 text-sm sm:text-base lg:text-lg">
              {hourModel?.hmEmpowerData?.buttonText}
              <FontAwesomeIcon icon={faPlay} className="mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
