import React,{useState,useEffect} from "react";
import bulbIcon from "../../images/bulbIcon.png";
import dottedBg from "../../images/dottedBg.png";
import useCareer from "../careers/careerFn/apiCareers";


export default function RequirementProcessCommon() {
  const { data, isError, isLoading, refetch} = useCareer()
  console.log(isLoading, "is load")
  const [carrer_WorkData, setCarrer_WorkData] = useState({})
  const [load, setLoading] = useState()

  useEffect(() => {
    setCarrer_WorkData(data?.carrer_WorkData)
    setLoading(isLoading)
  }, [data])
  console.log(carrer_WorkData)
  console.log(load);

  return (
    <div className="relative flex flex-col items-center justify-center px-5 py-10" style={{ overflow: "hidden" }}>
      <div className="relative flex flex-col items-center justify-center p-5 md:p-6 lg:p-8 xl:p-10 mx-5 mb-2">
        <div className="flex flex-col items-start w-full">
          <div className="flex items-start justify-start mb-5">
            <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mr-3" />
            <h2 className="text-orange-500 text-lg md:text-xl lg:text-2xl xl:text-2xl mb-2">
              RECRUITMENT PROCESS
            </h2>
          </div>

          <div className="mb-5 text-center md:text-left">
            <p className="text-lg md:text-lg lg:text-xl xl:text-2xl font-bold mb-5 whitespace-wrap w-full md:w-[600px] mx-auto md:mx-0">
            {load ? " Streamlined Recruitment Process For Exceptional Talent Acquisition" : carrer_WorkData?.Streamlined}
             
            </p>
            <div className="mb-8">
              <p className="text-sm md:text-base lg:text-lg xl:text-lg text-gray-600 mx-auto md:mx-0 whitespace-wrap w-full md:w-[600px] lg:w-[842px]">
              {load ? "  At Delostyle Studio, we excel at identifying and selecting top-tier talent tailored to your company's unique needs. Our recruitment process is designed to streamline the acquisition of exceptional candidates who will contribute to your organization's success." : carrer_WorkData?.Delostyle}
              
              </p>
            </div>
          </div>

          <div className="hidden md:flex timeline-container text-[#00274D] font-bold">
            <div className="timeline">
              <div className="timeline-step">
                
                
                <div className="timeline-circle">1</div>
                <div className="timeline-text mb-5 lg:mb-5" style={{ fontSize: "14px" }}>
                  Identify the client Requirement
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">2</div>
                <div className="timeline-text mb-5 lg:mb-5" style={{ fontSize: "14px" }}>
                  Identify possible sources of manpower Supply
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">3</div>
                <div className="timeline-text mx-5 mb-5 lg:mb-5" style={{ fontSize: "14px" }}>
                  Communicating the Information to client
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-circle">4</div>
                <div className="timeline-text mx-5 mb-5 lg:mb-5" style={{ fontSize: "14px" }}>
                  Receiving Application
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex flex-wrap gap-4 text-center">
            <div className="flex-1 w-1/2 mb-4 flex flex-col items-center">
              <div className="timeline-circle text-xl mb-2">1</div>
              <p className="text-sm md:text-base whitespace-normal w-[110px] h-[60px]  text-[#00274D] font-bold">
                Identify the client Requirement
              </p>
            </div>
            <div className="flex-1 w-1/2 mb-4 flex flex-col items-center">
              <div className="timeline-circle text-xl mb-2">2</div>
              <p className="text-sm md:text-base whitespace-normal w-[150px] h-[60px]  text-[#00274D] font-bold">
                Identify possible sources of manpower Supply
              </p>
            </div>
            <div className="flex-1 w-1/2 mb-4 flex flex-col items-center">
              <div className="timeline-circle text-xl mb-2">3</div>
              <p className="text-sm md:text-base whitespace-normal w-[110px] h-[60px]  text-[#00274D] font-bold">
                Communicating the Information to client
              </p>
            </div>
            <div className="flex-1 w-1/2 mb-4 flex flex-col items-center">
              <div className="timeline-circle text-xl mb-2">4</div>
              <p className="text-sm md:text-base whitespace-normal w-[110px] h-[60px] text-[#00274D] font-bold">
                Receiving Application
              </p>
            </div>
          </div>

          <button className="bg-orange-500 text-white py-2 px-4 md:py-2 md:px-6 md:mt-20 lg:py-2 lg:px-8 xl:py-3 xl:px-10 rounded-full text-sm md:text-base lg:text-lg xl:text-xl mt-10">
            Online Application
          </button>
          <div className="absolute right-5 top-5 hidden lg:block md:right-[-40px] lg:right-0 mt-12">
  <img src={dottedBg} alt="side-dotted" className="w-14 h-40 md:w-12 md:h-36 lg:w-16 lg:h-48 xl:w-20 xl:h-64" />
</div>


        </div>
      </div>
    </div>
  );
}