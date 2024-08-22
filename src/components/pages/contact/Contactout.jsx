import React, { useState, useEffect } from "react";
import Navbar from "../../navbar/Navbar";
import bulbIcon from "../../images/bulbIcon.png";
import blogBorder from "../../images/blogBorder.png";
import sideBorder from "../../images/sideBorder.png";
import dottedBg from "../../images/dottedBg.png";
import ContactForm from "./ContactForm";
import Newsletter from "../newsletter/Newsletter";
import SocialUpdates from "../socialUpdates/SocialUpdates";
import Footer from "../footer/Footer";
import OurWork from "./OurWork";

export default function Contact({ data, loading }) {
  const [contactOutData, setContactOutData] = useState({});
  const [load, setLoading] = useState(loading);
  const [isSideBorderVisible, setIsSideBorderVisible] = useState(true);
  const [isBlogBorderHidden, setIsBlogBorderHidden] = useState(false);

  useEffect(() => {
    setContactOutData(data?.contact_OutData);
    setLoading(loading);
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      setIsSideBorderVisible(window.innerWidth > 1445);
      setIsBlogBorderHidden(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center justify-center mt-10 px-4 lg:px-8 mb-10">
        {isSideBorderVisible && (
          <div className="hidden xl:block absolute left-0 top-0 h-full w-60 lg:w-72">
            <img src={sideBorder} alt="side-border" className="h-full" />
          </div>
        )}
        <div
          className={`relative flex flex-col items-start lg:item-center justify-center mb-5 p-5 lg:p-10 mx-5 lg:mx-10 ${
            isBlogBorderHidden ? "lg:ml-[-300px]" : ""
          }`}
        >
          <img
            src={blogBorder}
            alt="blog-border-left"
            className="absolute left-0 top-0 w-32 h-32 lg:w-48 lg:h-48"
            style={{ zIndex: 1 }}
          />
          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start w-full">
            <div className="flex flex-col lg:items-start w-full lg:w-2/3">
              <div className="flex items-center mb-5">
                <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8" />
                <h2
                  className="text-orange-500 text-base sm:text-lg md:text-xl mb-2 relative"
                  style={{ top: "7px" }}
                >
                  CONTACT
                </h2>
              </div>
              <div className="mb-5 w-full lg:w-[800px]">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                  {load
                    ? "How Can You Contact Us?"
                    : contactOutData?.Contact || "How Can You Contact Us?"}
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-5">
                  Reach out to us in the nearest office.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                  {load
                    ? "+91 6291 095 253"
                    : contactOutData?.contact_number || "+91 6291 095 253"}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-10">
                <div className="card-box p-4 sm:p-5 rounded-lg w-full lg:w-[320px] lg:bg-white lg:shadow-md lg:border lg:border-gray-300">
                  <h3 className="font-bold mb-2 text-gray-900 text-base lg:text-lg">
                    {load
                      ? "Headquarter"
                      : contactOutData?.Headquarter || "Headquarter"}
                  </h3>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-orange-600">
                    {load ? "Kasba" : contactOutData?.Kasba || "Kasba"}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 p-2">
                    {load
                      ? "1409, Rajdanga Block, BF-38, Shantipally, 1st Floor, Shantipally, Sector B, East Kolkata Twp, Kolkata, West Bengal 700107"
                      : contactOutData?.Block ||
                        "1409, Rajdanga Block, BF-38, Shantipally, 1st Floor, Shantipally, Sector B, East Kolkata Twp, Kolkata, West Bengal 700107"}
                  </p>
                  <h3 className="font-bold mb-1 text-gray-900 text-base lg:text-lg">
                    Working Hours
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    {load
                      ? "Monday - Friday 10 am to 6 pm IST"
                      : contactOutData?.Monday ||
                        "Monday - Friday 10 am to 6 pm IST"}
                  </p>
                </div>
                <hr
                  className="my-6 border-dashed border-2 opacity-20 lg:hidden"
                  style={{ borderColor: "#00274D", width: "100%" }}
                />
                <div className="card-box p-4 sm:p-5 rounded-lg w-full lg:w-[320px] lg:bg-white lg:shadow-md lg:border lg:border-gray-300">
                  <h3 className="font-bold mb-2 text-gray-900 text-base lg:text-lg">
                    {load
                      ? "Corporate Office"
                      : contactOutData?.Corporate_Office ||
                        "Corporate Office"}
                  </h3>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-orange-600">
                    Saltlake
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
                    {load
                      ? "Unit 17B Globsyn Crystals Block EP SaltLake 4th Floor Sector V Kolkata - 700091"
                      : contactOutData?.Block1 ||
                        "Unit 17B Globsyn Crystals Block EP SaltLake 4th Floor Sector V Kolkata - 700091"}
                  </p>
                  <h3 className="font-bold mb-1 text-gray-900 text-base lg:text-lg">
                    Working Hours
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    {load
                      ? "Monday - Friday 10 am to 6 pm IST"
                      : contactOutData?.Monday1 ||
                        "Monday - Friday 10 am to 6 pm IST"}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-x-1/2 lg:static 2xl:transform-none">
              <img
                src={dottedBg}
                alt="side-dotted"
                className="hidden lg:block w-24 h-72"
              />
            </div>
          </div>
          <img
            src={blogBorder}
            alt="blog-border-right"
            className="absolute right-0 bottom-0 transform rotate-180 w-24 lg:w-36"
            style={{ height: "170px" }}
          />
        </div>
      </div>
    </>
  );
}
