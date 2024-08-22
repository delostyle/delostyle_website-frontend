import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import blogBorder from "../../images/blogBorder.png";
import sideBorder from "../../images/sideBorder.png";
import dottedBg from "../../images/dottedBg.png";
import td1 from "../../images/td1.png";
import td2 from "../../images/td2.png";
import td3 from "../../images/td3.png";
import "./about.css";

export default function TechDriven({ data, loading }) {
  const [isWebView, setIsWebView] = useState(window.innerWidth > 1024);
  const [techDrivenData, setTechDrivenData] = useState(() => {
    // Load from localStorage or use default data
    const savedData = JSON.parse(localStorage.getItem("techDrivenData"));
    return savedData || {
      techdriven: "Driving Business Success Through Operational Excellence And Cutting-Edge Technology",
      techdriven1: "Operational processes are the backbone of any successful business...",
      techdriven2: "Our commitment to providing world-class technology solutions ensures...",
      // Add other default values here if needed
    };
  });

  useEffect(() => {
    const handleResize = () => setIsWebView(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);

    // Save data to localStorage whenever data prop changes
    if (data && !loading) {
      setTechDrivenData(data);
      localStorage.setItem("techDrivenData", JSON.stringify(data));
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [data, loading]);

  const translateStyle = isWebView ? { transform: 'translateX(100px)' } : {};

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center mt-20 px-4 lg:px-10">
      {/* Left Border Image */}
      <div className="hidden xl:block absolute left-0 top-0 h-full" style={{ width: "600px" }}>
        <img src={sideBorder} alt="side-border" className="h-full" />
      </div>
      
      {/* Main Content */}
      <div
        className="relative flex flex-col items-center lg:items-start justify-center p-5 lg:p-20 mx-auto max-w-screen-lg"
        style={translateStyle} // Apply conditional style
      >
        <img
          src={blogBorder}
          alt="blog-border-left"
          className="absolute left-0 top-0"
          style={{ width: "200px", height: "170px", zIndex: 1 }}
        />

        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-5">
            <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 lg:w-12 lg:h-12 mr-3" />
            <h2 className="text-orange-500 text-xl lg:text-2xl font-semibold">TECH-DRIVEN EFFICIENCY</h2>
          </div>
          <div className="mb-5">
            <p className="text-2xl lg:text-4xl font-bold mb-5">
              {techDrivenData.techdriven || "Driving Business Success <br /> Through Operational Excellence <br />And Cutting-Edge Technology"}
            </p>
          </div>
          <div className="w-full lg:w-2/3 mb-10">
            <p className="mb-2 text-gray-700 text-base lg:text-lg">
              {techDrivenData.techdriven1 || "Operational processes are the backbone of any successful business, driving efficiency and effectiveness across all departments. At Delostyle Studio, we specialize in a project delivery model that seamlessly integrates strategy and cutting-edge technology into businesses. This approach not only enhances operational efficiency but also enables significant cost savings."}
            </p>
            <p className="text-gray-700 text-base lg:text-lg">
              {techDrivenData.techdriven2 || "Our commitment to providing world-class technology solutions ensures that we offer feasible and cost-effective options tailored to meet your specific needs. We continually strive to stay updated with the latest advancements in technology, ensuring that our solutions are always at the forefront of innovation. By choosing us, you partner with a team dedicated to optimizing your operational processes and driving your business towards sustainable growth and success."}
            </p>
          </div>
          <hr className="my-10 border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "60%" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center lg:justify-between">
            <div className="text-center flex-1 max-w-[150px]">
              <img src={td1} alt="tech-driven-icon" className="w-24 h-24 mx-auto" />
              <h2 className="text-orange-500 text-2xl lg:text-3xl font-bold mt-2">90%</h2>
              <p className="font-bold mt-1">
                World Class
                <br />
                Technology
              </p>
            </div>
            <div className="text-center flex-1 max-w-[150px]">
              <img src={td2} alt="tech-driven-icon" className="w-24 h-24 mx-auto" />
              <h2 className="text-orange-500 text-2xl lg:text-3xl font-bold mt-2">89%</h2>
              <p className="font-bold mt-1">
                Operational
                <br />
                Efficiency
              </p>
            </div>
            <div className="text-center flex-1 max-w-[150px]">
              <img src={td3} alt="tech-driven-icon" className="w-24 h-24 mx-auto" />
              <h2 className="text-orange-500 text-2xl lg:text-3xl font-bold mt-2">95%</h2>
              <p className="font-bold mt-1">
                Satisfaction
                <br />
                Oriented
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Dotted Background Image */}
        <div className="absolute right-[240px] top-[200px] hidden 2xl:block">
          <img src={dottedBg} alt="side-dotted" style={{ width: "96px", height: "400px" }} />
        </div>

        {/* Right Blog Border Image */}
        <img 
          src={blogBorder} 
          alt="blog-border-right" 
          className="absolute right-0 bottom-0 transform rotate-180 w-36 lg:w-48" 
          style={{ height: "170px" }} 
        />
      </div>
    </div>
  );
}
