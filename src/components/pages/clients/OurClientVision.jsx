
import React,{useState,useEffect} from "react";
import bulbIcon from "../../images/bulbIcon.png";
import aboutBanner2 from "../../images/aboutBnner2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function OurClientVision({data,loading}) {
  const [client_VisionData, setClient_VisionData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setClient_VisionData(data?.client_VisionData)
    setLoading(loading)
  }, [data])
  console.log(client_VisionData)
  console.log(load);
  return (
    <div
      className="relative bg-blue-50 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${aboutBanner2})`, backgroundColor: "#00274D96" }}
    >
      <div className="absolute inset-0 bg-[#00274D] bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-5 py-10 md:px-20 md:py-20 text-white">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-5">
            <img src={bulbIcon} alt="bulb-icon" className="h-8 w-8 md:h-10 md:w-10" />
            <h2 className="text-orange-500 text-lg md:text-xl ml-2 md:ml-4">OUR VISION</h2>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            {load ? "The Operational Processes Are What Drives The Business" : client_VisionData?.Operational_Processes}
            
            </h2>
            <p className="text-white text-lg md:text-xl lg:text-2xl mb-5">
            {load ? " We specialize in the project delivery model that combines strategy and cutting-edge technology into businesses, hence enabling cost efficiency across the departments." : client_VisionData?.specialize}
             
            </p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg md:text-xl flex items-center">
              Watch Story <FontAwesomeIcon icon={faPlay} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}