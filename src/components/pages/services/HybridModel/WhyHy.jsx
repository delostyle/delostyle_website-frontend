import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import dhmDotted from "../../../images/dhmDotted.png";

export default function WhyHy({ hybrid_data }) {
  const data2 = hybrid_data?.data2;

  return (
    <div
      className="relative flex mt-20 overflow-hidden bg-center bg-no-repeat bg-cover consulting-banner"
      style={{
        background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div
        className="absolute inset-0 bg-[#B0BEC5]"
        style={{ opacity: 0.4, zIndex: -10 }}
      ></div>

      <div className="relative flex flex-col items-center justify-start p-4 sm:p-8 md:p-12 mx-4 sm:mx-8 lg:mx-16 text-white">
        <div className="w-full">
          <div className="flex items-center mb-5">
            <img src={bulbIcon} alt="bulb-icon" className="mr-3 w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-base sm:text-lg text-orange-500">
              {hybrid_data?.subHeading}
            </h2>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="overflow-hidden font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-tight">
              {hybrid_data?.mainHeading}
            </h1>
            <p className="mt-3 text-xs sm:text-sm lg:text-base text-white leading-relaxed">
              {hybrid_data?.descriptionText}
            </p>

            <div className="flex flex-wrap gap-5 mt-8 justify-center">
              {data2?.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#00274D] z-30 border relative p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2 w-full sm:w-48 md:w-56 lg:w-64"
                >
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-white"
                    style={{ opacity: 0.2 }}
                  />
                  <div
                    className="z-40 flex items-center justify-center font-bold w-8 h-8 sm:w-10 sm:h-10 border-2 border-orange-500 bg-orange-100 text-orange-500 rounded-full"
                  >
                    <h2 className="text-sm sm:text-base">{item.id}</h2>
                  </div>

                  <p className="text-base sm:text-lg text-white font-bold mb-2 z-1">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-[#777777] z-30">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <img
              src={dhmDotted}
              alt="work-together-border"
              className="absolute top-10 right-0 z-1 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-[500px] xl:h-[420px] hidden lg:block"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
