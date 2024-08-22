import React, { useState, useEffect } from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import howitwork from "../../../images/howitwork.jpg";

export default function HowItWorks({ data, loading }) {
  const [howItWorksData, setHowItWorksData] = useState({});
  const [load, setLoading] = useState(loading);

  const data2 = [
    { id: 1, title: "Consultation", desc: "We start with a comprehensive consultation to understand your business goals and IT consulting requirements." },
    { id: 2, title: "Team Building", desc: "Based on your needs, we assemble a dedicated team of professionals with the right skillset and experience." },
    { id: 3, title: "Project Execution", desc: "Our dedicated team works collaboratively with you creating and offering IT consulting services that perfectly align with your project objectives." },
    { id: 4, title: "Ongoing Support", desc: "We provide continuous support, regular updates, and transparent communication to ensure your project's success." },
  ];

  useEffect(() => {
    setHowItWorksData(data?.howItWorksData);
    setLoading(loading);
  }, [data]);

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
              HOW IT WORKS
            </h2>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="text-black overflow-hidden font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {load ? "How Does DHM Work?" : howItWorksData?.mainHeading}
            </h1>
            <p className="mt-3 text-[#777777] text-sm sm:text-base md:text-lg lg:text-xl" style={{ padding: "20px 0" }}>
              {load
                ? "The Dedicated Hiring Model (DHM) is designed to seamlessly integrate skilled professionals into your team. It begins with a thorough understanding of your business needs, followed by the selection of specialized experts in areas such as Development, Digital Marketing, Content Writing, non-voice BPO services, Graphic Designing, PPC, KPC, and more. This model offers flexibility, efficiency, and cost-effectiveness, ensuring your projects are delivered with precision and excellence."
                : howItWorksData?.descriptionText}
            </p>

            <div className="flex flex-wrap gap-5 justify-items-center mt-5">
              {(howItWorksData?.listItems ? howItWorksData.listItems : data2).map((item) => (
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

                  <p className="text-lg text-[#00274D] font-bold mb-3">
                    {item.title}
                  </p>
                  <p className="text-[#777777] mt-2 text-sm sm:text-base">
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
