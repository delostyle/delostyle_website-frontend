import React from "react";
import bulbIcon from "../../images/bulbIcon.png";
import sideBorder from "../../images/sideBorder.png"; 
import blogBorder from "../../images/blogBorder.png";
import codes from "../../images/codes.png";
import textureBg from "../../images/textureBg.jpg";
import boss from "../../images/boss.jpg";
import signature from "../../images/signature.png";
import aboutListIcon from "../../images/aboutListIcon.png";

export default function Testimonial() {

    const listItems = [
        "Development Services",
        "Development of Business Models",
        "Corporate Model Advisory",
        "Data Structuring",
        "Feasibility Studies & Business Plan",
    ];

  return (
    <>
      <div 
        className="consulting-banner relative bg-blue-50 flex bg-center bg-no-repeat bg-cover"                  
        style={{ backgroundImage: `url(${textureBg})`, opacity: "0.9", height: "auto" }}
      >
        <div 
          className="absolute inset-0 bg-[#B0BEC5]"
          style={{ opacity: 0.4, zIndex: -10 }} 
        ></div>
        <div className="relative bg-white rounded-lg mb-10 mx-auto mt-40 px-4 py-6 sm:w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl" style={{height: "auto", width: "100%" }}>
          <div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 ">
            <img
              src={boss}
              alt="Rajib Banerjee"
              className="profile-image rounded-full border-8 border-white bg-white"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className=" flex-col items-center justify-center  mt-16 p-4">
            <div className="relative flex items-center justify-center flex-col mx-4 sm:mx-2 p-4">
              <img 
                src={blogBorder} 
                alt="blog-border-left" 
                className="absolute left-0 top-0 hidden md:block" 
                style={{ width: "200px", height: "175px" }} 
              />
              <div className="flex flex-col items-center w-full">
                <div className="overflow-hidden mb-6 mx-auto text-center">
                  <img src={codes} alt="codes" className="h-6 mt-2 mx-2" />
                  <p className="text-gray-600 mx-4 text-black text-lg sm:text-base md:text-xl">
                    We help our clients build agile products that can help business functions within the organization.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center author-container">
                  <img src={signature} alt="sign" style={{ height: "80px", width: "240px" }} /> 
                  <p className="author-name font-bold text-xl text-blue-900 my-2 sm:text-lg">Rajib Banerjee</p> 
                  <p className="author-title text-lg text-[#777777] sm:text-base">DIRECTOR</p>
                </div>
              </div>
              <img 
                src={blogBorder} 
                alt="blog-border-right" 
                className="absolute right-0 bottom-0 transform rotate-180 hidden md:block" 
                style={{ width: "200px", height: "175px" }} 
              />
            </div>
            <hr className="mt-8 border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "100%" }} />
            <div className="justify-start mx-4 sm:mx-2 p-4">
              <p className="text-[#777777] text-base sm:text-sm mb-10 mt-5">
                Deloids are a group of people specialized in providing creative and diversified solution. We work to understand your issues and provide agile solutions based on your requirements.
              </p>
              {listItems.map((item, index) => (
                <div className="flex justify-start mt-3" key={index}>
                  <img src={aboutListIcon} alt="bulb-icon" className="about-icon mr-2" style={{ height: "20px", width: "20px" }} />
                  <p className="text-orange-500 text-lg sm:text-base mb-2 overflow-hidden">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
