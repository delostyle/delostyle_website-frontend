import React, { useState, useEffect } from 'react';
import bulbIcon from "../../../images/bulbIcon.png";

const KnowTS = ({ taskModel, loading }) => {
  const [knowTSData, setKnowTSData] = useState({});
  const [load, setLoading] = useState(loading);

  useEffect(() => {
    setKnowTSData(taskModel?.knowTSData);
    setLoading(loading);
  }, [taskModel, loading]);

  return (
    <div>
      <div className="flex flex-col items-center text-center px-4 py-6 sm:p-10 rounded-lg m-5 relative z-10">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-5">
          <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-0 sm:mr-3" />
          <h2 className="text-orange-500 text-lg sm:text-xl">
            {load ? "KNOW US BETTER" : knowTSData?.subHeading}
          </h2>
        </div>

        <h2 className="font-bold mb-4 sm:mb-6 overflow-hidden text-2xl sm:text-3xl lg:text-4xl max-w-full sm:max-w-2xl lg:max-w-4xl">
          {load ? "Discover Our Adaptive Task-Based Model For Dynamic IT Support" : knowTSData?.heading}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-full sm:max-w-2xl lg:max-w-4xl">
          {load ? "Experience our commitment to excellence through the Task-Based Model. We take full responsibility for delivering tailored solutions that meet your specific IT requirements with precision and efficiency. Partner with us to leverage expert guidance that propels your business forward." : knowTSData?.descriptionText}
        </p>
      </div>
      <div className="flex items-center justify-center z-20">
        {/* <Services /> */}
      </div>
    </div>
  );
};

export default KnowTS;
