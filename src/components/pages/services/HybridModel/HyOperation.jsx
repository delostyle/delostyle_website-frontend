import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import blogBorder from "../../../images/blogBorder.png";
import sideBorder from "../../../images/sideBorder.png";
import dottedBg from "../../../images/dottedBg.png";

export default function HyOperation({ hybrid_data }) {
  return (
    <div className="flex flex-col lg:flex-row mt-10" style={{ overflow: "hidden" }}>
      
      <div className="hidden lg:block lg:w-[520px] h-full mt-5">
        <img src={sideBorder} alt="side-border" className="h-full" style={{ height: "580px" }} />
      </div>

      <div className="relative flex flex-col p-5 lg:p-10 mx-5 lg:mx-10 mt-10 mb-2">
        
        <img
          src={blogBorder}
          alt="blog-border-left"
          className="absolute top-0 left-0"
          style={{ width: "248px", height: "213px" }}
        />

        <div className="flex flex-col mt-10">
          <div className="flex items-center mb-5">
            <img src={bulbIcon} alt="bulb-icon" className="mr-3" style={{ width: "40px", height: "40px" }} />
            <h2 className="text-orange-500" style={{ fontSize: "20px" }}>
              {hybrid_data?.title}
            </h2>
          </div>

          {/* Main Heading */}
          <div className="w-[72%]">
            <p className="font-bold mb-5" style={{ fontSize: "36px", lineHeight: "1.2", maxWidth: "100%" }}>
              {hybrid_data?.description}
            </p>
          </div>

          {/* Paragraphs */}
          <div className="w-full lg:w-2/3 mb-5">
            {hybrid_data?.paragraphs?.map((paragraph, index) => (
              <p key={index} className="text-[#777777] mt-5" style={{ fontSize: "16px" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="absolute hidden lg:block right-[10%] top-[190px]">
          <img src={dottedBg} alt="dotted-bg" style={{ width: "96px", height: "300px" }} />
        </div>

        <div className="w-full flex items-center justify-start">
          <hr className="border-dashed border-2 opacity-20 mx-0" style={{ borderColor: "#00274D", width: "65%" }} />
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
