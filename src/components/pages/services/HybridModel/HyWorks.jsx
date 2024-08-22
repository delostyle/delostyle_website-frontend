import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import howitwork from "../../../images/howitwork.jpg";

export default function HyWorks({ hybrid_data }) {
  const data2 = [
    {
      id: 1,
      title: "Needs Assessment",
      desc: "We initiate the process by conducting a thorough assessment of your IT consulting needs, considering the scope, goals, and desired outcomes.",
    },
    {
      id: 2,
      title: "Consultation and Strategy",
      desc: "Our IT experts collaborate to design a tailored strategy that combines the strengths of various services, ensuring a comprehensive approach.",
    },
    {
      id: 3,
      title: "Task Assignment",
      desc: "We allocate tasks to the experts, leveraging their specialized skills in Digital Marketing, Content Writing, BPO services, Graphic Designing, PPC, KPC, and development and software services.",
    },
    {
      id: 4,
      title: "Integrated Execution",
      desc: "The Hybrid Model ensures seamless integration and execution, fostering synergy among different service components.",
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center overflow-hidden bg-white bg-center bg-cover consulting-banner"
      style={{ backgroundImage: `url(${howitwork})`, opacity: 0.8 }}
    >
      <div
        className="absolute inset-0 bg-white"
        style={{ opacity: 0.7, zIndex: -10 }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-start p-5 sm:p-8 md:flex-row md:mx-10 lg:mx-20 text-white">
        <div className="w-full sm:w-3/4 mt-10 sm:mt-20 z-1">
          <div className="flex items-center mb-5">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="mr-3 w-8 h-8 sm:w-10 sm:h-10"
            />
            <h2 className="text-lg sm:text-xl text-orange-500">
              HOW IT WORKS
            </h2>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="font-bold text-black text-2xl sm:text-3xl lg:text-4xl">
              How Does the Hybrid Model Work?
            </h1>
            <p className="mt-2 text-[#777777] text-sm sm:text-base lg:text-lg leading-relaxed">
              In the Hybrid Model, we assess your IT needs, collaborate on a strategy, and assign tasks to experts. Our integrated approach ensures seamless execution and synergy among services.
            </p>

            <div className="flex flex-wrap gap-5 mt-5 justify-center">
              {data2.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 shadow-lg rounded-2xl flex flex-col items-start space-y-2 border border-[#D9D9D9] w-full sm:w-60"
                >
                  <div
                    className="flex items-center justify-center font-bold w-10 h-10 border-2 border-orange-500 bg-orange-100 text-orange-500 rounded-full"
                  >
                    <h2 className="text-lg">{item.id}</h2>
                  </div>

                  <p className="text-lg text-[#00274D] font-bold mb-3">
                    {item.title}
                  </p>
                  <p className="text-[#777777] text-sm sm:text-base">
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
