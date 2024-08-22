import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png";

const KnowHy = ({ hybrid_data }) => {
  return (
    <div>
      <div className="relative z-10 flex flex-col items-center p-5 sm:p-10 m-2 sm:m-5 text-center rounded-lg">
        <div className="flex mb-5 justify-center items-center">
          <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-10 sm:h-10 mr-2" />
          <h2 className="text-lg sm:text-xl text-orange-500" style={{ fontSize: "20px" }}>
            {hybrid_data?.subHeading}
          </h2>
        </div>

        <h2 className="font-bold mb-6 overflow-hidden text-xl sm:text-3xl lg:text-4xl w-full max-w-lg sm:max-w-xl lg:max-w-4xl">
          {hybrid_data?.mainHeading}
        </h2>
        <p className="mb-6 text-sm sm:text-base text-gray-600 max-w-full sm:max-w-xl lg:max-w-4xl">
          {hybrid_data?.descriptionText}
        </p>
      </div>
      <div className="z-20 flex items-center justify-center">
        {/* <Services/> */}
      </div>
    </div>
  );
};

export default KnowHy;
