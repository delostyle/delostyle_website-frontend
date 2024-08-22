import React, { useState, useEffect } from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import dhmDotted from "../../../images/dhmDotted.png";

export default function WhyDHM({ data, loading }) {
  const [servicesWhyDHMData, setServicesWhyDHMData] = useState({});
  const [load, setLoading] = useState(loading);

  const data2 = [
    {
      id: 1,
      title: "Customized Expertise",
      desc: "With this model, you have the freedom to access perfect tech solutions with our dedicated team that aligns perfectly with your project requirements. Whether you need a single specialist or a multi-disciplinary team, we've got you covered.",
    },
    {
      id: 2,
      title: "Cost Efficiency",
      desc: "The Dedicated Hiring Model offers exceptional cost savings compared to traditional recruitment processes. You can tap into our talent pool without the overhead costs of hiring, training, and maintaining an in-house team.",
    },
    {
      id: 3,
      title: "Flexible Engagement",
      desc: "Our consulting services encompasses various engagement models, including part-time, full-time, and project-based, ensuring that you have the flexibility to scale your team up or down as needed.",
    },
    {
      id: 4,
      title: "Industry Expertise",
      desc: "Our IT consulting experts are well-versed in the latest industry trends and technologies. They bring a wealth of knowledge and hands-on experience to your projects, ensuring top-notch results.",
    },
  ];

  useEffect(() => {
    setServicesWhyDHMData(data?.whyDHMData);
    setLoading(loading);
  }, [data]);

  return (
    <div
      className="consulting-banner relative flex bg-center bg-no-repeat bg-cover mt-20 overflow-hidden"
      style={{
        background: "linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      <div
        className="absolute inset-0 bg-[#B0BEC5]"
        style={{ opacity: 0.4, zIndex: -10 }}
      ></div>

      <div className="relative flex flex-col md:flex-row items-center justify-start mx-4 sm:mx-8 lg:mx-20 text-white p-5 md:p-8 lg:p-12">
        <div className="mt-10 md:mt-20 mx-4 sm:mx-8 md:mx-10">
          <div className="flex mb-5 items-center mt-10">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="bulb-icon mr-3 w-6 md:w-8"
            />
            <h2 className="text-orange-500 text-lg md:text-xl">
              WHY DHM
            </h2>
          </div>

          <div className="flex flex-col items-start">
            <h1
              className="text-white overflow-hidden font-bold text-3xl md:text-5xl lg:text-6xl"
              style={{ lineHeight: "1.2" }}
            >
              {load
                ? "Why Choose The Dedicated Hiring Model"
                : servicesWhyDHMData?.mainHeading}
            </h1>
            <p
              className="mt-3 overflow-hidden text-white text-sm md:text-lg lg:text-xl"
              style={{ padding: "10px 0" }}
            >
              {load
                ? "Our Dedicated Hiring Model (DHM) offers a flexible and client-centric approach to accessing a highly skilled team of IT professionals. This model is designed to provide cost-effective and efficient solutions tailored to meet your specific IT consulting needs."
                : servicesWhyDHMData?.descriptionText}
            </p>

            <div className="flex flex-wrap md:flex-nowrap gap-5 mt-10 justify-center md:justify-start">
              {(servicesWhyDHMData?.listItems
                ? servicesWhyDHMData.listItems
                : data2
              ).map((item) => (
                <div
                  key={item.id}
                  className="bg-[#00274D] z-30 border relative p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2"
                  style={{ height: "auto", width: "100%", maxWidth: "260px" }}
                >
                  <div
                    className="bg-white absolute h-full w-full top-0 left-0"
                    style={{
                      opacity: 0.2,
                    }}
                  />
                  <div
                    className="flex items-center z-40 justify-center font-bold"
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "2px solid #FF6600",
                      backgroundColor: "rgba(255, 102, 0, 0.1)",
                      color: "#FF6600",
                      borderRadius: "50%",
                      position: "relative",
                    }}
                  >
                    <h2 style={{ fontSize: "24px" }}>{item.id}</h2>
                  </div>

                  <p
                    className="text-lg text-[#00274D] font-bold mb-3 z-1 text-sm md:text-base"
                    style={{ color: "white" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-[#777777] mt-5 z-30 text-xs md:text-sm"
                    style={{ color: "white" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
  src={dhmDotted}
  alt="work-together-border"
  className="absolute top-10 right-0 z-1 w-64 sm:w-80 md:w-96 lg:w-[500px] lg:h-[420px] hidden 2xl:block"
  style={{ maxHeight: '100%', maxWidth: '100%' }}
/>

      </div>
    </div>
  );
}
