import React,{useState,useEffect} from "react";
import bulbIcon from "../../images/bulbIcon.png"
import blogBorder from "../../images/blogBorder.png"
import sideBorder from "../../images/sideBorder.png"
import dottedBg from "../../images/dottedBg.png"
import aboutListIcon from "../../images/aboutListIcon.png"

export default function CareerConsulting({data,loading}){
  const [carrer_ConsultingData, setCarrer_ConsultingData] = useState({})
  const [load, setLoading] = useState()

  useEffect(() => {
    setCarrer_ConsultingData(data?.carrer_ConsultingData)
    setLoading(loading)
  }, [data])
  console.log(carrer_ConsultingData?.MaintenanceList)
  console.log(load);

  const listItems = [
    "Great Environment",
    "Development of Skills",
    "Corporate Financial Security",
    "Job security",
    "Support and Maintenance",
  ];
    
    return(
     <div className="flex flex-row mt-20 h-[50rem] overflow-hidden">
        <div className="mt-5 career-hidden w-[520px]">
          <img src={sideBorder} alt="side-border" className="h-[100%]"/>
        </div>
        <div className="relative flex-col sm:mb-2 p-20 mx-10 mt-10" >
          <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute left-0 top-[-21px] w-[248px] h-[213px]" 
          />
         <div className="flex">
         <div className="h-full overflow-hidden flex-1">
  <div className="flex justify-start mb-5 ">
    <img 
      src={bulbIcon} 
      alt="bulb-icon" 
      className="bulb-icon mr-3 w-6 md:w-8 lg:w-8 " 
    />
    <h2 
      className="text-orange-500 text-base md:text-lg lg:text-xl mb-2 overflow-hidden"
    >
      YOUR CAREER WITH US
    </h2>
  </div>

  <div className="overflow-hidden w-full md:w-3/4 lg:w-full mb-1">
    <p 
      className="overflow-hidden text-ellipsis whitespace-nowrap font-bold text-xl md:text-3xl lg:text-5xl mb-5 h-[60px]"
    >
    {load ? "Careers In Consulting" : carrer_ConsultingData?.Careers}
    </p>
  </div>

  <div className="overflow-hidden w-full md:w-3/4 lg:w-2/3 mb-10">
    <p 
      className="mb-2 text-[#777777] text-sm md:text-base lg:text-lg" 
    >
     {load ? "Looking for Fun at Work! Join us to get the perfect environment and work culture." : carrer_ConsultingData?.Looking}
      
    </p>
    <p 
      className="text-[#777777] text-sm md:text-base lg:text-lg"
    >
     {load ? " We ensure a healthy and safe environment for our employees. Providing all facilities on time is our specialty. We have successfully created a team of experts along with a healthy environment. Keep following us to become a part of our team." : carrer_ConsultingData?.ensure}
     
    </p>
  </div>

  {load ? (
    listItems?.map((item, index) => (
    <div className="flex justify-start mb-2" key={index}>
      <img 
        src={aboutListIcon} 
        alt="about-icon" 
        className="about-icon mr-3 w-[16px] h-[16px]" 
      />
      <p className="text-orange-500 text-base md:text-lg lg:text-xl mb-2 overflow-hidden">
        {item}
      </p>
    </div>
  ))
  ) : (
    carrer_ConsultingData?.MaintenanceList?.map((item, index) => (
    <div className="flex justify-start mb-2" key={index}>
      <img 
        src={aboutListIcon} 
        alt="about-icon" 
        className="about-icon mr-3 w-[16px] h-[16px]" 
      />
      <p className="text-orange-500 text-base md:text-lg lg:text-xl mb-2 overflow-hidden">
        {item}
      </p>
    </div>
  ))
)}
</div>

  <div className="absolute right-[179px] top-[200px] w-[96px] h-[400px] career-image career-hidden career-absolute-right ">
  <img src={dottedBg} alt="side-dotted " />
  </div>
</div>
<div className="w-[100%] absolute bottom-0">
 <hr className="mt-24 border-dashed border-2 opacity-20 mx-0 career-width career-hidden bg-[#00274D] w-[55%]"  />
 </div>
          <img 
            src={blogBorder} 
            alt="blog-border-right " 
            className="absolute right-[10px] bottom-[0px] transform rotate-180 w-[248px] h-[213px]" 
          />
        </div>
      </div>

    )
}
