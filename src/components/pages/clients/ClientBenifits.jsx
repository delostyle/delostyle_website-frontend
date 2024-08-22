
import React,{useState,useEffect} from "react";
import bulbIcon from "../../images/bulbIcon.png";
import client1 from "../../images/client1.png";
import client2 from "../../images/client2.png";
import client3 from "../../images/client3.png";
import client4 from "../../images/client4.png";

export default function ClientBenifits({data,loading}) {
  const [client_BenefitData, setClient_BenefitData] = useState({})
  const [load, setLoading] = useState(loading)

  useEffect(() => {
    setClient_BenefitData(data?.client_BenefitData)
    setLoading(loading)
  }, [data])
 
  return (
    <div className="flex flex-col items-center text-center p-10 rounded-lg m-5 relative z-10">
      <div className="flex items-center justify-center mb-5">
        <img src={bulbIcon} alt="bulb-icon" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
        <h2 className="text-orange-500 text-lg md:text-xl lg:text-2xl mb-2">OUR CLIENTS</h2>
      </div>

      <h2 className="font-bold mb-4 overflow-hidden text-3xl md:text-3xl lg:text-4xl xl:text-6xl whitespace-normal h-[150px]">
      {load ? "  Our Clients Benefit From The Latest Trends And Strategies" : client_BenefitData?.benefit}
      
      </h2>

      <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#555555] mb-6">
      {load ? " At Delostyle Studio, we stay ahead by exploring the latest industry trends and strategies. Our clients benefit from our innovative solutions, tailored to their needs. Partnering with us equips them with the tools and insights to navigate the evolving business landscape and achieve lasting success." : client_BenefitData?.delostyle_studio}
       
      </p>

      <div className="flex flex-wrap justify-center">
        <img src={client1} alt="client1" className="h-24 w-48 mx-2 my-2 md:h-32 md:w-64 lg:h-36 lg:w-72" />
        <img src={client2} alt="client2" className="h-24 w-48 mx-2 my-2 md:h-32 md:w-64 lg:h-36 lg:w-72" />
        <img src={client3} alt="client3" className="h-24 w-48 mx-2 my-2 md:h-32 md:w-64 lg:h-36 lg:w-72" />
        <img src={client4} alt="client4" className="h-24 w-48 mx-2 my-2 md:h-32 md:w-64 lg:h-36 lg:w-72" />
      </div>
    </div>
  );
}
