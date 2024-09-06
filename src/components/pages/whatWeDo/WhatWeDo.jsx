import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import sideBorder from "../../images/sideBorder.png";
import blogBorder from "../../images/blogBorder.png";
import dottedbg from "../../images/dottedBg.png";

export default function WhatWeDo({ data, loading }) {
  const [whatWeDoData, setWhatWeDoData] = useState({});
  const [load, setLoading] = useState(loading);

  useEffect(() => {
    setWhatWeDoData(data?.whatWeDoData);
    setLoading(loading);
  }, [data]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:h-[1015px] md:h-[883px] h-auto mt-10" style={{ overflow: "hidden" }}>
      
      {/* Side Border Image - Hidden on smaller screens */}
      <div className="hidden lg:block lg:w-[300px] h-full mt-10">
        <img src={sideBorder} alt="side-border" className="h-[790px]" />
      </div>

      {/* Main Content Section */}
      <div className="relative flex items-center justify-center flex-col mb-5 p-5 md:p-10 lg:p-20 mx-5 md:mx-10 w-full">
        
        {/* Blog Border Left */}
        <img
          src={blogBorder}
          alt="blog-border-left"
          className="absolute left-0 top-0 w-[248px] h-[213px]"
        />

        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="flex-1">
            
            {/* Heading Section */}
            <div className="flex justify-start mb-5">
              <img src={bulbIcon} alt="bulb-icon" className="mr-3" style={{ width: "40px", height: "40px" }} />
              <h2 className="text-orange-500 text-base md:text-lg mb-2">WHAT WE DO</h2>
            </div>

            {/* Headings */}
            <div className="mb-1">
              <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 leading-relaxed">
                {load
                  ? "We Bring Your Vision To Life By Transforming Your Ideas Into Reality"
                  : whatWeDoData?.headingText}
              </h2>
              <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 leading-relaxed">
                {load
                  ? "By Transforming Your Ideas Into Reality To Life"
                  : whatWeDoData?.subHeadingText1}
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="w-full md:w-2/3 mb-10 mt-10">
              <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl mb-5 leading-relaxed">
                {load
                  ? "We bring your ideas to life through a meticulous process of development and refinement."
                  : whatWeDoData?.paragraphText1}
              </p>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                {load
                  ? "Our team works closely with you to understand your vision and objectives, transforming your concepts into tangible, high-quality deliverables. By establishing key touchpoints throughout the project, we ensure that every detail aligns with your expectations."
                  : whatWeDoData?.paragraphText2}
              </p>
            </div>
          </div>

          {/* Dotted Background - Hidden on smaller screens */}
          <div className="absolute hidden lg:block right-[10%] top-[190px]">
            <img src={dottedbg} alt="dotted-bg" style={{ width: "96px", height: "300px" }} className="mt-10" />
          </div>
        </div>

        {/* Blog Border Right */}
        <img
          src={blogBorder}
          alt="blog-border-right"
          className="absolute right-0 transform rotate-180 w-[248px] h-[213px]"
          style={{ bottom: "5px" }}
        />
      </div>
    </div>
  );
}
