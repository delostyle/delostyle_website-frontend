import React, { useState, useEffect } from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import blogBorder from "../../../images/blogBorder.png";
import sideBorder from "../../../images/sideBorder.png";
import dottedBg from "../../../images/dottedBg.png";
import aboutListIcon from "../../../images/aboutListIcon.png";

export default function PbmOperation({ data, loading }) {
  const [pbmOperationData, setPbmOperationData] = useState({});
  const [load, setLoading] = useState(loading);

  useEffect(() => {
    setPbmOperationData(data?.pbmOperationData);
    setLoading(loading);
  }, [data]);

  return (
    <div className="flex flex-col lg:flex-row mt-10" style={{ overflow: "hidden" }}>
      
      <div className="hidden lg:block lg:w-[520px] h-full mt-5">
        <img src={sideBorder} alt="side-border" className="h-full" />
      </div>

      <div className="relative flex flex-col mb-2 p-5 lg:p-10 mx-5 lg:mx-10 mt-10">
        
        <img 
            src={blogBorder} 
            alt="blog-border-left" 
            className="absolute left-0 top-0" 
            style={{ width: "248px", height: "213px" }} 
          />

        <div className="flex flex-col mt-10">
          <div className="flex items-center mb-5">
            <img
              src={bulbIcon}
              alt="bulb-icon"
              className="mr-3"
              style={{ width: "40px", height: "40px" }}
            />
            <h2
              className="text-orange-500 text-xl"
              style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            >
              OPERATIONAL PROCESS
            </h2>
          </div>

          {/* Main Heading */}
          <div className="w-[72%]">
            <p
              className="font-bold mb-5"
              style={{ fontSize: "36px", lineHeight: "1.2", maxWidth: "100%" }}
            >
              {load ? "PBM Help Brands Adapt And Thrive In The Professional World" : pbmOperationData?.mainHeading}
            </p>
          </div>

          {/* Description */}
          <div className="w-full lg:w-2/3 mb-5">
            <p className="mb-2 text-[#777777]" style={{ fontSize: "16px" }}>
              {load ? "We’re here to show you that the search for resource is over." : pbmOperationData?.descriptionText1}
            </p>
            <p className="text-[#777777] mt-5" style={{ fontSize: "16px" }}>
              {load ? "Our Project Based Model is a client-centric approach that focuses on delivering precise tech services that stand out to meet the demands of your unique projects. We understand that one-size-fits-all solutions never really work that well, and that’s where our expertise comes into play." : pbmOperationData?.descriptionText2}
            </p>
          </div>
        </div>

        <div className="absolute hidden lg:block right-[10%] top-[190px]">
          <img src={dottedBg} alt="dotted-bg" style={{ width: "96px", height: "300px" }} />
        </div>

        <div className="w-full flex items-center justify-start">
          <hr
            className="border-dashed border-2 opacity-20 mx-0"
            style={{ borderColor: "#00274D", width: "65%" }}
          />
        </div>

        <img
          src={blogBorder}
          alt="blog-border-right"
          className="absolute right-0 transform rotate-180"
          style={{ 
            width: "248px", 
            height: "213px",
            bottom: "5px"
          }}
        />
      </div>
    </div>
  );
}
