import React, {useState,useEffect} from "react";
import bulbIcon from "../../../images/bulbIcon.png";
// import Services from './Services';

const KnowUsBetter = ({data,loading}) => {
    const [knowData, setKnowData] = useState({})
    const [load, setLoading] = useState(loading)
    useEffect(() => {
        setKnowData(data?.knowUsBetterData)
        setLoading(loading)
      }, [data])
    
    return (
        <div>
        <div className="flex flex-col items-center text-center p-10  rounded-lg m-5 relative z-10">
        <div className="flex mb-5">
       <img src={bulbIcon} alt="bulb-icon" className="bulb-icon" />  <h2 className="text-orange-500 text-xl mb-2" style={{fontSize:"20px"}}>KNOW US BETTER</h2>
       </div>
     
      <h2 className="font-bold mb-6  overflow-hidden" style={{fontSize:"46px"}}>
        {load ? "Explore A Flexible, Client-Centric Approach To Accessing Skilled IT Professionals Tailored To <br/> Your Needs":knowData?.subHeading}</h2>
      <p className="text-base text-gray-600 mb-6">
      {load ? "We’re here to guide you in identifying which processes need attention and which do not. By focusing on areas that require care and optimizing those that don't, we help drive innovation and efficiency in your organization. Partner with us to unlock your full potential and lead the way in your industry.":knowData?.descriptionText}
      </p>
    
    </div>
    <div className="flex items-center justify-center z-20">
        {/* <Services/> */}
    </div>
    </div>
    // </div>
    );
};

export default KnowUsBetter;
