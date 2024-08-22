import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import worktogetherBd from "../../images/worktogetherBd.png";
import "./about.css";

export default function WeWorkTogether({ data, loading }) {
  const [weWorkTogether, setWeWorkTogether] = useState(() => {
    // Load from localStorage or use default data
    const savedData = JSON.parse(localStorage.getItem("weWorkTogetherData"));
    return savedData || {
      worktogeter: "Envisioning A Future Where Business Technology Solutions Seamlessly Integrate With Your Ideas",
      worktogeter1: "Together as a team, we envision a future where business technology solutions seamlessly integrate with your ideas...",
      // Add other default values here if needed
    };
  });

  useEffect(() => {
    // Save data to localStorage whenever data prop changes
    if (data && !loading) {
      setWeWorkTogether(data);
      localStorage.setItem("weWorkTogetherData", JSON.stringify(data));
    }
  }, [data, loading]);

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

      <div className="relative flex flex-col items-center text-center md:flex-row md:items-start md:text-left justify-start mx-4 sm:mx-8 lg:mx-20 text-white p-5 md:p-8 lg:p-12">
        <div className="mt-10 md:mt-20 mx-4 sm:mx-8 md:mx-10 w-full max-w-screen-md">
          <div className="flex mb-5 items-center justify-center md:justify-start mt-10">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="bulb-icon mr-3 w-6 md:w-8"
            />
            <h2 className="text-orange-500 text-lg md:text-xl">
              WE WORK TOGETHER
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h1
              className="text-white overflow-hidden font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ lineHeight: "1.2" }}
            >
              {weWorkTogether.worktogeter}
            </h1>
            <p
              className="mt-3 overflow-hidden text-white text-sm sm:text-base md:text-lg lg:text-xl"
              style={{ padding: "10px 0" }}
            >
              {weWorkTogether.worktogeter1}
            </p>
            <p
              className="mt-3 overflow-hidden text-white text-sm sm:text-base md:text-lg lg:text-xl"
              style={{ padding: "10px 0" }}
            >
              {weWorkTogether.worktogeter2 || "Our vision is anchored in a commitment to empower organizations of all sizes with the transformative power of IT."}
            </p>
            <p
              className="mt-3 overflow-hidden text-white text-sm sm:text-base md:text-lg lg:text-xl"
              style={{ padding: "10px 0" }}
            >
              {weWorkTogether.worktogeter3 || "Our team solely believes and is run by the notion that businesses are not limited by technology but propelled by it..."}
            </p>
            <p
              className="mt-3 overflow-hidden text-white text-sm sm:text-base md:text-lg lg:text-xl"
              style={{ padding: "10px 0" }}
            >
              {weWorkTogether.worktogeter4 || "We are here to offer you with a landscape of outsourcing services where IT consulting is synonymous with reliability..."}
            </p>
            <p
              className="mt-3 overflow-hidden text-white text-sm sm:text-base md:text-lg lg:text-xl"
              style={{ padding: "10px 0" }}
            >
              {weWorkTogether.worktogeter5 || "Moreover, when it comes to the future, it’s about making a meaningful impact today..."}
            </p>
            <p
              className="mt-3 overflow-hidden text-white text-sm sm:text-base md:text-lg lg:text-xl"
              style={{ padding: "10px 0" }}
            >
              {weWorkTogether.worktogeter6 || "Together, let’s shape a future where your business thrives with Delostyle Studio as your trusted IT partner."}
            </p>
            <img
              src={worktogetherBd}
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
