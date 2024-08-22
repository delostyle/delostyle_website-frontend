import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import empowerBanner from "../../../images/empowerBanner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function HyEmpower({ hybrid_data }) {
  return (
    <div
      className="relative flex flex-col items-center justify-between bg-center bg-no-repeat bg-cover consulting-banner"
      style={{ backgroundImage: `url(${empowerBanner})`, backgroundColor: "#00274D96" }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 mx-4 sm:mx-8 lg:mx-16 text-white md:flex-row">

        <div className="w-full md:w-auto items-start h-full p-4 sm:p-8">
          <div className="flex items-center mb-5">
            <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            <h2 className="ml-4 text-lg sm:text-xl text-orange-500">{hybrid_data?.mainHeading}</h2>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white font-bold mb-5 leading-tight text-2xl sm:text-3xl lg:text-4xl">
              {hybrid_data?.subHeading}
            </h2>
            <p className="text-white text-sm sm:text-lg lg:text-xl mt-3 leading-relaxed">
              {hybrid_data?.descriptionText}
            </p>
            <button className="px-6 py-2 mt-8 text-white bg-orange-500 rounded-full text-sm sm:text-lg">
              Watch Story<FontAwesomeIcon icon={faPlay} className="ml-2" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
