import React, { useState, useEffect } from "react";
import bulbIcon from "../../images/bulbIcon.png";
import blogBorder from "../../images/blogBorder.png";
import sideBorder from "../../images/sideBorder.png";
import dottedBg from "../../images/dottedBg.png";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";

export default function Process({ data, loading }) {
  const [isWebView, setIsWebView] = useState(window.innerWidth > 1024);
  const [isMdAndBelow, setIsMdAndBelow] = useState(window.innerWidth <= 768);
  const [processData, setProcessData] = useState({});
  const [load, setLoading] = useState(loading);

  useEffect(() => {
    const handleResize = () => {
      setIsWebView(window.innerWidth > 1024);
      setIsMdAndBelow(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    setProcessData(data?.processData);
    setLoading(loading);

    return () => window.removeEventListener('resize', handleResize);
  }, [data, loading]);

  return (
    <div 
      className={`flex flex-col ${isWebView ? 'lg:flex-row' : ''} items-center justify-center mt-20 overflow-hidden`} 
      style={{ height: isWebView ? "75rem" : "auto" }}
    >
      <div className={`${isWebView ? 'block' : 'hidden'} lg:w-[300px] h-full mt-5`}>
        <img src={sideBorder} alt="side-border" className="h-full" />
      </div>

      <div className="relative flex items-center justify-center flex-col mb-2 p-5 lg:p-20 mx-5 lg:mx-10">
        <img
          src={blogBorder}
          alt="blog-border-left"
          className="absolute left-0 top-0"
          style={{ width: "248px", height: "213px" }}
        />

        <div className="flex flex-col mt-10">
          <div className={`flex items-center mb-5 ${isMdAndBelow ? 'justify-center' : ''}`}>
            <img src={bulbIcon} alt="bulb-icon" className="mr-3" style={{ width: "40px", height: "40px" }} />
            <h2 className="text-orange-500 text-xl mb-2" style={{ fontSize: "20px" }}>
              {load ? processData?.title : "OPERATIONAL PROCESS"}
            </h2>
          </div>

          <div className="mb-5">
            <p className="font-bold mb-5" style={{ fontSize: isMdAndBelow ? "28px" : "36px", lineHeight: "1.2", maxWidth: "100%" }}>
              {load ? processData?.heading : "Driving Business Success Through Operational Excellence And Cutting-Edge Technology"}
            </p>
          </div>

          <div className={`w-full ${isWebView ? 'lg:w-2/3' : 'lg:w-full'} mb-10`}>
            <p className="text-[#777777]" style={{ fontSize: isMdAndBelow ? "16px" : "18px" }}>
              {load ? processData?.description : "Operational processes are the backbone of any business, essential for its smooth functioning and growth. They ensure efficiency, productivity, and ultimately drive the business forward. Get fresh HR ideas from this young and creative company."}
            </p>
          </div>

          <hr className="mt-10 mb-10 border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: isMdAndBelow ? "80%" : "60%" }} />

          <div className={`flex ${isMdAndBelow ? 'flex-col' : 'gap-20'} mt-5 mb-10 items-center`}>
            <div className="text-center">
              <img
                src={p1}
                alt="model-icon"
                className="rounded-full p-4"
                style={{ height: "150px", width: "150px", border: "1px solid #00274D", margin: "4px" }}
              />
              <h2 className="text-orange-500 text-3xl font-bold mt-2">90%</h2>
              <p className="font-bold mt-1">Development <br /> Consulting</p>
            </div>
            <div className="text-center">
              <img
                src={p2}
                alt="model-icon"
                className="rounded-full p-4"
                style={{ height: "150px", width: "150px", border: "1px solid #00274D", margin: "4px" }}
              />
              <h2 className="text-orange-500 text-3xl font-bold mt-2">80%</h2>
              <p className="font-bold mt-1">Software<br />Support</p>
            </div>
            <div className="text-center">
              <img
                src={p3}
                alt="model-icon"
                className="rounded-full p-4"
                style={{ height: "150px", width: "150px", border: "1px solid #00274D", margin: "10px" }}
              />
              <h2 className="text-orange-500 text-3xl font-bold mt-2">85%</h2>
              <p className="font-bold mt-1">Management <br />Consulting</p>
            </div>
          </div>
        </div>

        <div className={`absolute ${isWebView ? 'block' : 'hidden'} right-[10%] top-[350px]`}>
          <img src={dottedBg} alt="dotted-bg" style={{ width: "96px", height: "400px" }} />
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
