import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import howitwork from "../../../images/howitwork.jpg";

export default function SmWorks({ supportData }) {
  const data2 = supportData?.smWorksData?.data2;

  return (
    <div
      className="consulting-banner bg-white opacity-20 relative flex overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${howitwork})`, opacity: 0.8 }}
    >
      <div
        className="absolute inset-0 bg-white"
        style={{ opacity: 0.7, zIndex: -10 }}
      ></div>

      <div className="relative z-10 flex flex-col items-center md:items-start justify-start mx-4 sm:mx-10 lg:mx-20 text-black p-5">
        <div className="w-full md:w-3/4 mt-10 sm:mt-20 z-1">
          <div className="flex mb-5 items-center">
            <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-10 sm:h-10 mr-3" />
            <h2 className="text-orange-500 text-lg sm:text-xl">
              HOW IT WORKS
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
              {supportData?.smWorksData?.mainHeading}
            </h1>

            <p className="mt-1 text-gray-600 text-sm sm:text-lg lg:text-xl mb-6 text-center md:text-left">
              {supportData?.smWorksData?.descriptionText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              {data2?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 shadow-lg rounded-2xl flex flex-col items-center md:items-start border border-gray-300"
                  style={{ width: "100%", maxWidth: "260px" }}
                >
                  <div
                    className="flex items-center justify-center font-bold w-10 h-10 border-2 border-orange-500 bg-orange-100 text-orange-500 rounded-full mb-3"
                  >
                    <h2 className="text-lg">{item.id}</h2>
                  </div>

                  <p className="text-lg text-[#00274D] font-bold mb-2 text-center md:text-left">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base mt-2 text-center md:text-left">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
