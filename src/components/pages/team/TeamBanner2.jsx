import React from 'react';
import bulbIcon from "../../images/bulbIcon.png";
import teamBanner2 from "../../images/teamBanner2.png";

const TeamBanner2 = ({ teamData }) => {
  // Extract the necessary fields from the teamData prop (teamBanner2Data)
  const {
    heading = "We Will Help Your Career Grow", // Default heading in case teamData is missing
    description = "We will work on your ideas and create the touchpoints to make sure of the high quality deliverables.",
    subHeading = "CAREERS",
    buttonText = "View All Available Positions"
  } = teamData?.teamBanner2Data || {}; // Destructure from teamBanner2Data with fallback values

  return (
    <div
      className="relative flex bg-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: `linear-gradient(to right, #00274D 0%, #00274D60 30%), url(${teamBanner2})`,
        backgroundColor: "#00274D96",
        height: "460px",
        width: "100%",
      }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10 text-white">
        <div className="flex flex-col items-start w-full md:w-3/4 max-w-screen-lg mx-auto">
          <div className="flex items-center mb-4 md:mb-10 md:ml-0 ml-0 md:justify-start justify-start">
            <img src={bulbIcon} alt="bulb-icon" className="w-10 h-10 md:h-5 md:w-5" />
            <h2 className="text-orange-500 text-lg md:text-xl ml-4">{subHeading}</h2>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white font-bold mb-4 md:mb-5 text-2xl md:text-4xl">{heading}</h2>
            <p className="text-gray-300 mt-4 md:mt-5 text-base md:text-lg">{description}</p>
            <button className="bg-orange-500 text-white py-2 px-4 md:py-2 md:px-6 rounded-full mt-6 md:mt-10 text-sm md:text-lg">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner2;
