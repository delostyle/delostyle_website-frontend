import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import dhmDotted from "../../../images/dhmDotted.png";

export default function WhySm({ supportData }) {
  const data2 = supportData?.whySmData?.dataItems;

  return (
    <div
      className="consulting-banner relative flex flex-col md:flex-row bg-center bg-no-repeat bg-cover mt-10 sm:mt-20 overflow-hidden"
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

      <div className="relative z-10 flex flex-col items-center justify-start mx-4 sm:mx-10 lg:mx-20 text-white p-5">
        <div className="mt-10 sm:mt-20 w-full">
          <div className="flex mb-5 items-center justify-center sm:justify-start">
            <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-10 sm:h-10 mr-3" />
            <h2 className="text-orange-500 text-lg sm:text-xl">
              WHY SM
            </h2>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center sm:text-left">
              {supportData?.whySmData?.mainHeading}
            </h1>
            <p className="mt-3 text-white text-sm sm:text-lg lg:text-xl text-center sm:text-left whitespace-normal break-words" style={{ padding: "20px 0" }}>
              {supportData?.whySmData?.descriptionText}
            </p>

            <div className="flex flex-wrap gap-5 justify-center sm:justify-start mt-6">
              {data2?.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#00274D] border relative p-4 shadow-lg rounded-2xl flex flex-col items-center sm:items-start space-y-2 w-full sm:w-60"
                >
                  <div className="bg-white absolute h-full w-full top-0 left-0" style={{ opacity: 0.2 }} />
                  <div
                    className="flex items-center justify-center font-bold w-10 h-10 border-2 border-orange-500 bg-orange-100 text-orange-500 rounded-full"
                  >
                    <h2 className="text-lg">{item.id}</h2>
                  </div>

                  <p className="text-lg text-white font-bold mb-3 text-center sm:text-left">{item.title}</p>
                  <p className="text-[#777777] mt-2 text-sm sm:text-base text-center sm:text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <img
          src={dhmDotted}
          alt="work-together-border"
          className="absolute top-10 right-[-100px] z-1 w-40 sm:w-64 md:w-80 lg:w-[500px] xl:h-[420px] hidden lg:block"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}
