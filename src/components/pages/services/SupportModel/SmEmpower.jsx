import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import empowerBanner from "../../../images/empowerBanner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function SmEmpower({ supportData }) {
  return (
    <div
      className="consulting-banner relative bg-blue-50 flex bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${empowerBanner})`, backgroundColor: "#00274D96" }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-4 sm:mx-10 lg:mx-20 text-white">

        <div className="items-start h-full mt-10 sm:mt-20 p-4 sm:p-10 max-w-full lg:max-w-3xl">
          <div className="flex mb-6 sm:mb-10">
            <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-10 sm:h-10 mr-4" />
            <h2 className="text-orange-500 text-lg sm:text-xl" style={{ fontSize: "20px" }}>
              MEET OUR EXPERTS
            </h2>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white overflow-hidden py-2 font-bold mb-5 whitespace-normal text-2xl sm:text-4xl lg:text-5xl max-w-full">
              {supportData?.smEmpowerData?.mainHeading}
            </h2>
            <p className="text-gray-700 text-white mt-5 overflow-hidden text-sm sm:text-lg lg:text-xl">
              {supportData?.smEmpowerData?.descriptionText}
            </p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-10 text-sm sm:text-lg lg:text-xl">
              Watch Story
              <FontAwesomeIcon icon={faPlay} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
