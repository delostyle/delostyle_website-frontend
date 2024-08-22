import React from "react";
import textureBg from "../../images/textureBg.jpg";
import blueArrow from "../../images/blueArrow.png";
import orangeArrow from "../../images/orangeArrow.png";
import arrowHand1 from "../../images/arrowHand1.png";
import arrowHand2 from "../../images/arrowHand2.png";
import "./about.css";

export default function YearProgress() {
  return (
    <div
      className="consulting-banner relative bg-blue-50 flex bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${textureBg})`, opacity: "0.9" }}
    >
      <div
        className="absolute inset-0 bg-[#B0BEC5]"
        style={{ opacity: 0.7, zIndex: -10 }}
      ></div>
      <div className="container mx-auto py-10 px-5 z-1">
        <div className="flex flex-col items-center p-10">
          <div className="flex flex-col lg:flex-row justify-between gap-20">
            <div className="flex flex-col items-center mb-10 lg:mb-0">
              <div
                className="bg-[#FF6600] text-white px-4 py-2 rounded-2xl"
                style={{ fontSize: "24px" }}
              >
                2016
              </div>
              <img
                src={arrowHand1}
                alt="hand-arrow"
                className="mt-5"
                style={{ width: "32px", height: "32px" }}
              />
              <div
                className="bg-[#EFD6C6] text-center px-4 py-2 mt-5 rounded-2xl"
                style={{ height: "174px", width: "260px" }}
              >
                <div className="mt-3" style={{ fontSize: "20px", color: "#777777" }}>January 2016</div>
                <div className="font-bold mt-5" style={{ fontSize: "24px", color: "#00274D" }}>New Office In Kolkata</div>
              </div>
              <div
                className="bg-[#EFD6C6] text-center px-4 py-2 mt-5 rounded-2xl"
                style={{ height: "174px", width: "260px" }}
              >
                <div className="mt-3" style={{ fontSize: "20px", color: "#777777" }}>April 2016</div>
                <div className="font-bold mt-5" style={{ fontSize: "24px", color: "#00274D" }}>Company Formation</div>
              </div>
            </div>

            <div className="flex flex-col items-center mb-10 lg:mb-0">
              <div
                className="bg-[#00274D] text-white px-4 py-2 rounded-2xl"
                style={{ fontSize: "24px" }}
              >
                2019
              </div>
             
              <img
                src={arrowHand2}
                alt="hand-arrow"
                className="mt-5"
                style={{ width: "32px", height: "32px" }}
              />
              
              
              <div
                className="bg-[#ABC7E1] text-center px-4 py-2 rounded-2xl mt-5"
                style={{ height: "174px", width: "260px" }}
              >
                <div className="mt-3" style={{ fontSize: "20px", color: "#FFFFED" }}>October 2019</div>
                <div className="font-bold mt-5" style={{ fontSize: "24px", color: "#00274D" }}>New Office In Kolkata</div>
              </div>
            </div>

            <div className="flex flex-col items-center mb-10 lg:mb-0">
              <div
                className="bg-[#FF6600] text-white px-4 py-2 rounded-2xl"
                style={{ fontSize: "24px" }}
              >
                2022
              </div>
              <img
                src={arrowHand1}
                alt="hand-arrow"
                className="mt-5"
                style={{ width: "32px", height: "32px" }}
              />
              <div
                className="bg-[#EFD6C6] text-center px-4 py-2 mt-5 rounded-2xl"
                style={{ height: "174px", width: "260px" }}
              >
                <div className="mt-3" style={{ fontSize: "20px", color: "#777777" }}>February 2022</div>
                <div className="font-bold mt-5" style={{ fontSize: "24px", color: "#00274D" }}>Certificate Of Accreditation</div>
              </div>
              <div
                className="bg-[#EFD6C6] text-center px-4 py-2 mt-5 rounded-2xl"
                style={{ height: "174px", width: "260px" }}
              >
                <div className="mt-3" style={{ fontSize: "20px", color: "#777777" }}>August 2022</div>
                <div className="font-bold mt-5" style={{ fontSize: "24px", color: "#00274D" }}>Startup India Recognition</div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div
                className="bg-[#00274D] text-white px-4 py-2 rounded-2xl"
                style={{ fontSize: "24px" }}
              >
                2023
              </div>
              <img
                src={arrowHand1}
                alt="hand-arrow"
                className="mt-5"
                style={{ width: "32px", height: "32px", marginBottom: "4%" }}
              />
              <div
                className="bg-[#ABC7E1] text-center px-4 py-2 rounded-2xl mt-5"
                style={{ height: "174px", width: "260px" }}
              >
                <div className="mt-3" style={{ fontSize: "20px", color: "#FFFFED" }}>August 2023</div>
                <div className="font-bold mt-5" style={{ fontSize: "24px", color: "#00274D" }}>New Office In Saltlake</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
