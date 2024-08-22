import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png";
// import Services from './Services';

const KnowHM = ({hourModel}) => {
 

    return (
        <div>
        <div className="flex flex-col items-center text-center p-10  rounded-lg m-5 relative z-10">
        <div className="flex mb-5">
       <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="text-orange-500 text-xl mb-2" style={{fontSize:"20px"}}>
        {/* KNOW US BETTER */}
         {hourModel?.knowHMData?.subHeading}
        </h2>
       </div>
     
      <h2 className="font-bold mb-6  overflow-hidden" style={{fontSize:"46px"}}>
        {/* Discover Our Flexible Hour Model for Superior <br/> IT Support</h2> */}
        {hourModel?.knowHMData?.mainHeading}
        </h2>
      <p className="text-base text-gray-600 mb-6">
      {/* Experience our dedication to excellence through the Hour Model. We stand behind our services, taking full responsibility for every hour dedicated to your IT needs. With precision and efficiency, our Hour Model delivers high-quality solutions tailored to your specific requirements. Partner with us to see how our expert guidance can propel your business forward. */}
      {hourModel?.knowHMData?.descriptionText}
      </p>
    
    </div>
    <div className="flex items-center justify-center z-20">
        {/* <Services/> */}
    </div>
    </div>
    // </div>
    );
};

export default KnowHM;
