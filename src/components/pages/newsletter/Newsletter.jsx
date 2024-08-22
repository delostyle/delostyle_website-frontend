import React from 'react';
import subscribe from "../../images/subscribe.png";
import bulbIcon from "../../images/bulbIcon.png";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div 
      className="flex items-center newsletter-bg justify-start bg-transparent subscribe-section relative overflow-hidden"
      style={{
        width: "90%",
      }}
    >
      <div className="z-10 absolute flex-col w-full flex justify-start right-40 left-40 mobile-shift">
        <div className="flex flex-col items-center sm:flex-row sm:items-center flex-box">
          <img src={bulbIcon} alt="bulb-icon" className="w-8 h-8 sm:w-10 sm:h-10 mr-2" />
          <h2 className="text-orange-500 text-xl mb-2 text-center sm:text-left overflow-hidden">
            STAY CONNECTED
          </h2>
        </div>

        <h2 
          className="subscribe-head text-white text-xl flex-box mx-6 mx-sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center md:text-left mt-5"
        >
          Subscribe To Our Newsletter
        </h2>

        <div className="overflow-hidden p-5 flex flex-box items-center">
          <input
            type="email"
            placeholder="Your Email"
            className="form-control w-75 p-5"
            style={{
              borderRadius: "25px 0 0 25px",
              backgroundColor: "rgba(238, 238, 238, 1)",
              height: "50px",
              border: "1px solid #ddd",
              marginRight: "-25px",
              zIndex: 1,
              fontSize: "20px"
            }}
          />
          <button
            className="subscribe-button bg-orange-500 text-white py-2 px-6"
            style={{
              height: "50px",
              borderRadius: "25px",
              border: "1px solid #ddd",
              zIndex: 1,
              fontSize: "20px"
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="w-full h-80 bg-[#00274D] md:bg-transparent">
        <img
          src={subscribe}
          alt="subscribe"
          className="hidden md:block w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Newsletter;
