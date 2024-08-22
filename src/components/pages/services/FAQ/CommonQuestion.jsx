import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import blogBorder from "../../../images/blogBorder.png";
import sideBorder from "../../../images/sideBorder.png";
import dottedBg from "../../../images/dottedBg.png";
import Accordion2 from "./Accordion2";

export default function CommonQuestion() {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full lg:h-[50rem] overflow-hidden">
      <div className="h-[650px] w-[200px] hidden lg:block">
        <img src={sideBorder} alt="side-border" className="h-full"/>
      </div>

      <div className="relative flex items-center justify-start flex-col p-5 sm:p-10 lg:p-20 w-full h-[854px]">
        <div className="flex flex-row sm:flex-row justify-start mb-5 w-full">
          <img src={bulbIcon} alt="bulb-icon" className="mb-3 h-8 w-8 mx-2"/>
          <h2 className="text-orange-500 text-xl sm:text-2xl lg:text-2xl">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="overflow-hidden mb-3 h-[50px] w-full">
          <p className="overflow-hidden font-bold mx-4 text-2xl sm:text-2xl lg:text-5xl">
            Common Other Questions Addressed
          </p>
        </div>

        <div className="w-full">
          <Accordion2 />
        </div>

        <div className="absolute hidden lg:block left-[960px] top-[180px]">
          <img src={dottedBg} alt="side-dotted" className="mx-10 w-[96px] h-[300px]" />
        </div>
      </div>
    </div>
  );
}
