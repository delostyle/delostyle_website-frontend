import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import ourexper from "../../images/ourexper.png";

export default function OurExpert({ data, loading }) {
  const [ourExpertData, setOurExpertData] = useState({});
  const [load, setLoading] = useState(loading);

  useEffect(() => {
    setOurExpertData(data?.ourExpertData);
    setLoading(loading);
  }, [data]);

  return (
    <div
      className="consulting-banner relative flex flex-col lg:flex-row bg-center bg-no-repeat bg-cover mt-10 overflow-hidden"
      style={{
        background: "linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)",
        minHeight: "550px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between mx-5 lg:mx-20 text-white space-y-8 lg:space-y-0 lg:space-x-10 p-5 lg:p-10">
        <div className="w-full lg:w-1/2">
          <div className="flex mb-5 items-center mt-2">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3 w-6 h-6 lg:w-8 lg:h-8" />
            <h2
              className="text-orange-500 text-lg lg:text-xl"
              style={{ fontSize: "20px" }}
            >
              {load ? "Meet Our Experts" : ourExpertData?.title}
            </h2>
          </div>
          <div className="flex flex-col items-start">
            <h1
              className="text-white overflow-hidden font-bold text-2xl lg:text-4xl"
              style={{ fontSize: "36px" }}
            >
              {load
                ? "Our Experts Will Bring Your Ideas To Life"
                : ourExpertData?.description}
            </h1>
            <p
              className="mt-1 overflow-hidden text-base lg:text-lg"
              style={{ fontSize: "18px", padding: "10px 0" }}
            >
              {load
                ? "Our experts will materialize your ideas and meticulously create the touchpoints necessary to ensure high-quality deliverables."
                : ourExpertData?.bottomDescription}
            </p>
            <button
              className="bg-orange-500 text-white py-2 px-6 rounded-full mt-5 lg:mt-10 text-sm lg:text-lg"
              style={{ fontSize: "20px" }}
            >
              Connect To Our Experts
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end hidden 2xl:block ">
          <img
            src={ourexper}
            alt="work-together-border"
            className="w-64 h-64 lg:w-96 lg:h-96"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
