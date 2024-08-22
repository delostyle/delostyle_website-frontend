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
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:h-[1015px] md:h-[883px] h-auto" style={{ overflow: "hidden", marginTop:"40px" }}>
        {/* Side Border Image - Hidden on smaller screens */}
        <div className="hidden lg:inline-block h-full mt-10" style={{ width: "300px" }}>
          <img src={sideBorder} alt="side-border" className="left-0 top-0 h-[790px]" />
        </div>

        {/* Main Content Section */}
        <div className="relative flex items-center justify-center flex-col mb-5 p-5 md:p-10 lg:p-20 mx-5 md:mx-10 w-full">
          {/* Blog Border Left */}
          <img
            src={blogBorder}
            alt="blog-border-left"
            className="absolute left-0 top-0 w-[62px] md:w-[124px] h-[53px] md:h-[106px]"
          />

          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="flex-1">
              {/* Heading Section */}
              <div className="flex justify-start mb-5">
                <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
                <h2 className="text-orange-500 text-base md:text-lg mb-2">WHAT WE DO</h2>
              </div>

              <div className="mb-1">
                {/* Headings */}
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
            <div className="absolute right-[130px] 2xl:right-[120px] top-[140px] 2xl:top-[280px] hidden 2xl:block">
              <img src={dottedbg} alt="side-dotted" className="w-[25px] md:w-[55px] h-[85px] md:h-[150px]" />
            </div>
          </div>

          {/* Blog Border Right */}
          <img
            src={blogBorder}
            alt="blog-border-right"
            className="absolute right-0 md:right-[60px] xl:right-[120px] bottom-0 transform rotate-180 w-[63px] md:w-[124px] h-[63px] md:h-[110px]"
          />
        </div>
      </div>

      {/* Additional responsive adjustments for small screens */}
      <style jsx>{`
        @media (max-width: 512px) {
          .bulb-icon {
            width: 30px;
            height: 30px;
          }

          h2 {
            font-size: 1.2rem;
          }

          .leading-relaxed {
            font-size: 0.9rem;
          }

          img {
            width: 80%;
          }
        }
      `}</style>
    </>
  );
}
