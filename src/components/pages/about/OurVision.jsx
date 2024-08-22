import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import blogBorder from "../../images/blogBorder.png";
import sideBorder from "../../images/sideBorder.png";
import dottedBg from "../../images/dottedBg.png";
import aboutListIcon from "../../images/aboutListIcon.png";
import model1 from "../../images/model1.png";
import model2 from "../../images/model2.png";
import model3 from "../../images/model3.png";
import "./about.css";

export default function OurVision({ data, loading }) {
 
  const [isWebView, setIsWebView] = useState(window.innerWidth > 1024);
  const [ourVision, setOurVision] = useState(() => {
    // Load from localStorage or use default data
    const savedData = JSON.parse(localStorage.getItem("ourVisionData"));
    return savedData || {
      ourVision: "Our Vision and Continuous Path To Progress",
      ourVision1: "We bring your ideas to life through a meticulous process of development and refinement.",
      // Add other default values here if needed
    };
  });

  useEffect(() => {
    const handleResize = () => setIsWebView(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);

    // Save data to localStorage whenever data prop changes
    if (data && !loading) {
      setOurVision(data);
      localStorage.setItem("ourVisionData", JSON.stringify(data));
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [data, loading]);


  // Apply translateX only on web view
  const translateStyle = isWebView ? { transform: 'translateX(100px)' } : {};

  const listItems = [
    "Development Services",
    "Consulting Services",
    "Project Management",
    "Quality Assurance",
    "Support and Maintenance",
  ];

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center mt-20 px-4 lg:px-10 mb-10">
      {/* Left Border Image */}
      <div className="hidden xl:block absolute left-0 top-0 h-full" style={{ width: "230px" }}>
        <img src={sideBorder} alt="side-border" className="h-full" />
      </div>

      {/* Main Content */}
      <div
        className="relative flex flex-col lg:flex-row items-start lg:items-center justify-center bg-white p-6 lg:p-12 mx-auto max-w-screen-lg rounded-lg"
        style={translateStyle} // Apply conditional style
      >
        {/* Background Border */}
        <img
          src={blogBorder}
          alt="blog-border-left"
          className="absolute left-0 top-0"
          style={{ width: "200px", height: "170px", zIndex: 1 }}
        />

        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center mb-4">
              <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 lg:w-12 lg:h-12 mr-3" />
              <h2 className="text-orange-500 text-xl lg:text-2xl font-semibold">OUR VISION</h2>
            </div>
            <p className="text-2xl lg:text-4xl font-bold mb-4">
               {ourVision.ourVision}
            </p>
            <p className="text-gray-700 text-base lg:text-lg mb-4">
              {ourVision.ourVision1}
            </p>
            <p className="text-gray-700 text-base lg:text-lg mb-4">
              {ourVision.ourVision2 || "Delostyle Studio Private Limited has been incorporated in the year 2016. Our strength lies in our team of experts..."}
            </p>
            {listItems.map((item, index) => (
              <div className="flex items-center mb-2" key={index}>
                <img src={aboutListIcon} alt="about-icon" className="w-5 h-5 mr-3" />
                <p className="text-orange-500 text-base lg:text-lg">{item}</p>
              </div>
            ))}
            <hr className="mt-6 mb-6 border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "60%" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
              <div className="text-center">
                <img src={model1} alt="model-icon" className="w-24 h-24 mx-auto" />
                <h2 className="text-orange-500 text-2xl font-bold mt-2">98%</h2>
                <p className="font-bold">Planning and<br />Modeling</p>
              </div>
              <div className="text-center">
                <img src={model2} alt="model-icon" className="w-24 h-24 mx-auto" />
                <h2 className="text-orange-500 text-2xl font-bold mt-2">99%</h2>
                <p className="font-bold">Business<br />Solutions</p>
              </div>
              <div className="text-center">
                <img src={model3} alt="model-icon" className="w-24 h-24 mx-auto" />
                <h2 className="text-orange-500 text-2xl font-bold mt-2">95%</h2>
                <p className="font-bold">Dedicated<br />Resource Model</p>
              </div>
            </div>
          </div>
          
          {/* Right Side Dotted Background */}
          <div className="absolute hidden lg:block h-[500px] w-16 left-[800px] top-[100px]">
            <img src={dottedBg} alt="dotted-bg" className="w-16 h-64 absolute top-[133px]" style={{ zIndex: -1 }} />
          </div>
        </div>

        {/* Rotated Border at the Bottom */}
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
