import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import visionsideImg from "../../images/visionSideImg.png";
import "./about.css";

export default function CreateSolution({ data, loading }) {
  const [isWebView, setIsWebView] = useState(window.innerWidth > 1024);
  const [createSolution, setCreateSolution] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("createSolutionData"));
    return savedData || {
      createSoluntion: "Create Solutions And Grow Your Business",
      createSoluntion1: "We can help you with picking out the best people for your company and its work...",
      // Add other default values here if needed
    };
  });

  useEffect(() => {
    const handleResize = () => setIsWebView(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);

    // Save data to localStorage whenever data prop changes
    if (data && !loading) {
      setCreateSolution(data);
      localStorage.setItem("createSolutionData", JSON.stringify(data));
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [data, loading]);

  return (
    <div
      className="relative flex flex-col md:flex-row bg-center bg-no-repeat bg-cover mt-10 overflow-hidden"
      style={{
        background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',
        height: "auto",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-4 md:p-8 text-white">
        <div className="relative z-10 flex flex-col items-start justify-center w-full md:w-1/2 md:pr-8">
          <div className="flex items-center mb-4 md:mb-6">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="bulb-icon mr-3"
              style={{ width: '24px', height: '24px' }}
            />
            <h2 className="text-orange-500 text-lg md:text-xl" style={{ fontSize: "20px" }}>
              OUR PROCESS
            </h2>
          </div>
          <h1 className="text-white font-bold text-2xl md:text-4xl mb-4 md:mb-6" style={{ fontSize: "36px" }}>
            {createSolution.createSoluntion}
          </h1>
          <p className="text-sm md:text-base mb-4" style={{ padding: "10px 0" }}>
            {createSolution.createSoluntion1}
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-full text-sm md:text-base" style={{ fontSize: "20px" }}>
            Read More
          </button>
        </div>
        <img
          src={visionsideImg}
          alt="work-together-border"
          className="mt-6 md:mt-0 md:ml-auto w-full md:w-1/2 hidden md:block"
          style={{ maxWidth: '560px', height: 'auto' }}
        />
      </div>
    </div>
  );
}
