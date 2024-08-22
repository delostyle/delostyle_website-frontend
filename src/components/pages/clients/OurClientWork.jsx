import React,{useState,useEffect} from "react";
import bulbIcon from "../../images/bulbIcon.png";
import ourwork1 from "../../images/ourwork1.png";
import ProjectInfo from "./ProjectInfo";

export default function OurClientWork({data,loading}) {
  const [client_WorkData, setClient_WorkData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setClient_WorkData(data?.client_WorkData)
    setLoading(loading)
  }, [data])
  // console.log(client_WorkData)
  // console.log(load);
  return (
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-4 md:mx-20 text-white gap-5 md:gap-10 p-5">
      <div className="w-full md:w-3/4 mt-10 md:mt-20 z-1">
        <div className="flex mb-5 items-center">
          <img
            src={bulbIcon}
            alt="bulb-icon"
            className="bulb-icon mr-3"
            style={{ width: '24px', height: '24px' }} // adjust size as needed
          />
          <h2 className="text-orange-500 text-lg md:text-xl" style={{ fontSize: "1.25rem" }}>OUR WORK</h2>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-black overflow-hidden py-2 font-bold text-2xl md:text-4xl">
          {load ? "Have A Look At Our Case Studies Showcasing Proven Client Satisfaction" : client_WorkData?.case_studies}
            
          </h1>
          <p className="mt-1 overflow-hidden text-[#777777] text-base md:text-lg" style={{ padding: "20px 0" }}>
          {load ? "Our team is dedicated to ensuring client satisfaction through hard work and innovative solutions. Our case studies highlight the success stories of our clients, showcasing how our best-in-class service has made a significant impact on their businesses." : client_WorkData?.dedicated}
            
          </p>
          <a href="/cases" className="bg-orange-500 text-white py-2 px-4 md:py-2 md:px-6 rounded-full mt-5 md:mt-10 text-base md:text-lg" style={{ fontSize: "1rem" }}>
            All Case Studies
          </a>
        </div>
    
      <img
        src={ourwork1}
        alt="work-together-border"
        className="absolute top-10 right-5 md:top-20 md:right-20"
        style={{ width: '150px', height: '150px', maxWidth: '100%' }}
      />
            <ProjectInfo/>
          </div>
        </div>
     
    )
}