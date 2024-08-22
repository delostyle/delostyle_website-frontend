import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import ourmission1 from "../../images/ourmission1.png";
import ourmission2 from "../../images/ourmission2.jpg";
import "./about.css";

export default function OurMission({ data, loading }) {
  const [isWebView, setIsWebView] = useState(window.innerWidth > 1024);
  const [ourMission, setOurMission] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("ourMissionData"));
    return savedData || {
      ourmission: "Our Mission Is To Empower Business Success Through Innovative IT Consulting Solutions",
      ourmission1: "At Delostyle Studio, our mission is to drive the success of businesses by harnessing the full potential that technology solutions have to offer. We are committed to providing top-notch IT consulting services that empower our clients to thrive in an ever-evolving digital landscape.",
      ourmission2: "In pursuing our mission, we seek to empower businesses to navigate the complexities of the digital world with confidence and efficiency. Together, we will transform challenges into opportunities, goals into achievements, and dreams into realities.",
      ourmission3: "Join us on this mission to redefine what’s possible in the world of IT consulting",
    };
  });

  const data2 = [
    { id: 1, title: "Client-Centric Solutions", desc: "Our foremost mission is to understand and address the unique challenges and opportunities of each client. We tailor innovative business solutions to meet your businesses specific needs, ensuring that technology becomes an enabler rather than an obstacle." },
    { id: 2, title: "Innovation and Expertise", desc: "We are on a relentless pursuit of excellence. Our mission is to stay at the cutting edge of technology and bring innovative solutions to the table. With our team of experts, we aim to provide the highest level of expertise to our clients." },
    { id: 3, title: "Long-Lasting Partnerships", desc: "Building enduring relationships is integral to our outsourcing services. We aim to become a trusted partner on your journey to success, offering continuous support, guidance, and solutions that evolve with your business." },
    { id: 4, title: "Community Engagement", desc: "Our mission extends beyond the boardroom. We are committed to giving back to the communities we serve. Through educational initiatives and advanced knowledge, we strive to make a positive impact on society." },
    { id: 5, title: "Sustainability", desc: "Delostyle Studio is dedicated to environmental and social responsibility. Our mission includes minimizing our ecological footprint and promoting sustainable practices through our business technology solutions in the tech industry." }
  ];

  useEffect(() => {
    const handleResize = () => setIsWebView(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);

    // Save data to localStorage whenever data prop changes
    if (data && !loading) {
      setOurMission(data);
      localStorage.setItem("ourMissionData", JSON.stringify(data));
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [data, loading]);

  return (
    <div
      className="consulting-banner relative flex overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${ourmission2})`, opacity: 0.8 }}
    >
      <div 
        className="absolute inset-0 bg-[#B0BEC5]"
        style={{ opacity: 0.4, zIndex: -10 }} 
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center sm:justify-start mx-4 sm:mx-10 lg:mx-20 text-white p-5">
        <div className="w-full md:w-3/4 mt-10 sm:mt-20">
          <div className="flex mb-5 items-center">
            <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 mr-3" />
            <h2 className="text-orange-500 text-lg sm:text-xl" style={{ fontSize: "20px" }}>OUR MISSION</h2>
          </div>
          
          <div className="flex flex-col items-start">
            <h1 className="text-black overflow-hidden font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {ourMission.ourmission}
            </h1>
            <p className="mt-3 text-[#777777] text-sm sm:text-base md:text-lg lg:text-xl" style={{ padding: "20px 0" }}>
              {ourMission.ourmission1}
            </p>
            <p className="mt-3 text-[#777777] text-sm sm:text-base md:text-lg lg:text-xl" style={{ padding: "20px 0" }}>
              {ourMission.ourmission2}
            </p>
            <p className="mt-3 text-[#777777] text-sm sm:text-base md:text-lg lg:text-xl" style={{ padding: "20px 0" }}>
              {ourMission.ourmission3}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {data2.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2 border border-[#D9D9D9] shadow-md w-full sm:w-60"
                >
                  <div
                    className="flex items-center justify-center font-bold w-10 h-10 border-2 border-orange-500 bg-orange-100 text-orange-500 rounded-full"
                  >
                    <h2 className="text-lg">{item.id}</h2>
                  </div>
                  
                  <p className="text-lg text-[#00274D] font-bold mb-3">
                    {item.title}
                  </p>
                  <p className="text-[#777777] mt-2 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <img src={ourmission1} alt="work-together-border" className="absolute top-20 right-2 hidden xl:block" style={{ width: '460px', height: '460px' }} />
          </div>
        </div>
      </div>
    </div> 
  );
}
