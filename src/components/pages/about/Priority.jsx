import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import priorityImg from "../../images/priorityImg.png";
import "./about.css";

export default function Priority({ data, loading }) {
  const [priorityData, setPriorityData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("priorityData"));
    return savedData || {
      priority: ".Priority.Quality.Delivery",
      priority1: "#Make ourselves recognized as a brand.,#Providing utmost priority to our client.,#Furnishing timely delivery of projects.,#Maintaining sheer quality of projects.",
    };
  });

  useEffect(() => {
    if (data && !loading) {
      setPriorityData(data);
      localStorage.setItem("priorityData", JSON.stringify(data));
    }
  }, [data, loading]);

  const renderPriorityPoints = (points) => {
    return points.split(',').map((point, index) => (
      <React.Fragment key={index}>
        {point.trim()} <br />
      </React.Fragment>
    ));
  };

  return (
    <div 
      className="relative flex flex-col bg-center bg-no-repeat bg-cover mt-10 overflow-hidden p-7"
      style={{
        background: 'linear-gradient(90.34deg, #00274D 0.80%, #005BB3 79.57%)',
        minHeight: "550px",
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-white p-4 sm:p-6 md:p-10">
        <div className="flex flex-col items-start w-full md:w-3/4 mt-5 sm:mt-10 p-4 sm:p-6 md:p-10">
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
            {priorityData.priority}
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl py-2 sm:py-4">
            {renderPriorityPoints(priorityData.priority1)}
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 sm:px-6 rounded-full mt-4 sm:mt-6 text-xs sm:text-sm md:text-base">
            Watch Story <FontAwesomeIcon icon={faPlay} className="mx-2" />
          </button>
        </div>
        <img 
          src={priorityImg} 
          alt="priority-image" 
          className="mt-6 hidden md:block w-full md:w-1/2 lg:w-1/3"
          style={{ maxHeight: '300px', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
