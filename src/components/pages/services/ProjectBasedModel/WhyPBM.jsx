import React, { useState, useEffect } from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import dhmDotted from "../../../images/dhmDotted.png";

export default function WhyPBM({ data, loading }) {
  const [whyPbmData, setWhyPbmDataData] = useState({});
  const [load, setLoading] = useState(loading);

  const data2 = [
    {
      id: 1,
      title: "Customized Solutions",
      desc: "We start by comprehensively understanding the specific requirements and goals of your project. This allows us to craft tailored strategies that align perfectly with your objectives.",
    },
    {
      id: 2,
      title: "Cost Efficiency",
      desc: "With our model, you pay only for the services you require, making it a cost-effective solution for your project-based IT consulting needs.",
    },
    {
      id: 3,
      title: "Expertise on Demand",
      desc: "Our model provides you with access consulting services from a team of seasoned professionals proficient in various IT consulting services. This ensures that your project receives the specialized skills and knowledge it deserves.",
    },
    {
      id: 4,
      title: "Efficiency and Timeliness",
      desc: "Time is of the essence in the fast-paced world of technology. Our Project Based Model is built for efficient project management, ensuring that your project is completed on time and within budget.",
    },
  ];

  useEffect(() => {
    setWhyPbmDataData(data?.whyPbmData);
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

      <div className="relative flex flex-col md:flex-row items-center justify-start mx-4 sm:mx-10 lg:mx-20 text-white p-5">
        <div className="mt-10 sm:mt-20 mx-4 sm:mx-10">
          <div className="flex mb-5 items-center">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="bulb-icon w-8 h-8 sm:w-10 sm:h-10 mr-3"
            />
            <h2 className="text-orange-500 text-lg sm:text-xl" style={{ fontSize: "20px" }}>
              WHY PBM
            </h2>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl">
              {load ? "Why Opt For The Project Based Model?" : whyPbmData?.mainHeading}
            </h1>
            <p className="mt-3 text-white text-sm sm:text-lg lg:text-xl" style={{ padding: "20px 0" }}>
              {load
                ? "The Project-Based Model (PBM) offers flexibility and precision, ensuring tailored strategies for each project. By leveraging specialized skills and efficient resource allocation, PBM reduces costs and delivers high-quality results within set timelines. Opt for PBM to enhance operational efficiency, drive innovation, and achieve exceptional outcomes."
                : whyPbmData?.descriptionText}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              {(whyPbmData?.listItems ? whyPbmData.listItems : data2).map((item) => (
                <div
                  key={item.id}
                  className="bg-[#00274D] border relative p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2 w-full sm:w-60"
                >
                  <div className="bg-white absolute h-full w-full top-0 left-0" style={{ opacity: 0.2 }} />
                  <div
                    className="flex items-center justify-center font-bold w-10 h-10 border-2 border-orange-500 bg-orange-100 text-orange-500 rounded-full"
                  >
                    <h2 className="text-lg">{item.id}</h2>
                  </div>

                  <p className="text-lg text-white font-bold mb-3">{item.title}</p>
                  <p className="text-[#777777] mt-2 text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>

            <img
              src={dhmDotted}
              alt="work-together-border"
              className="absolute top-10 right-0 z-1 w-64 sm:w-80 md:w-96 lg:w-[500px] lg:h-[420px] hidden 2xl:block"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
