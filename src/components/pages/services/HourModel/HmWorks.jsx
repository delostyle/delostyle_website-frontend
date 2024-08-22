import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import howitwork from "../../../images/howitwork.jpg";

export default function HmWorks({ hourModel }) {
  const data2 = hourModel?.hmWorksData?.data2;

  return (
    <div
      className="consulting-banner bg-white opacity-20 relative flex overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${howitwork})`, opacity: 0.8 }}
    >
      <div
        className="absolute inset-0 bg-white"
        style={{ opacity: 0.7, zIndex: -10 }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start mx-4 sm:mx-10 lg:mx-20 text-white p-5">
        <div className="w-full md:w-3/4 mt-10 sm:mt-20">
          <div className="flex mb-5 items-center">
            <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 mr-3" />
            <h2 className="text-orange-500 text-lg sm:text-xl" style={{ fontSize: "20px" }}>
              {hourModel?.hmWorksData?.subHeading}
            </h2>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="text-black overflow-hidden font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {hourModel?.hmWorksData?.mainHeading}
            </h1>
            <p className="mt-3 text-[#777777] text-sm sm:text-base md:text-lg lg:text-xl" style={{ padding: "20px 0" }}>
              {hourModel?.hmWorksData?.descriptionText}
            </p>

            <div className="flex flex-wrap gap-5 justify-items-center mt-5">
              {data2?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2 border border-[#D9D9D9] shadow-md w-full sm:w-60"
                  style={{ height: "auto" }}
                >
                  <div
                    className="flex items-center justify-center font-bold w-10 h-10 border-2 border-orange-500 bg-orange-100 text-orange-500 rounded-full"
                  >
                    <h2 className="text-lg">{item.id}</h2>
                  </div>

                  <p className="text-lg text-[#00274D] font-bold mb-3">{item.title}</p>
                  <p className="text-[#777777] mt-2 text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
