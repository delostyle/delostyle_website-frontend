import React, { useState } from 'react';
import faq1 from "../../../images/faq1.png";
import howitwork from "../../../images/howitwork.jpg";
import bulbIcon from "../../../images/bulbIcon.png";
import Accordion from './Accordion';

const Questions = () => {
    const [resourceCount, setResourceCount] = useState(1);
    const [duration, setDuration] = useState(1);
  
    const handleResourceChange = (e) => {
      setResourceCount(e.target.value);
    };
  
    const handleDurationChange = (e) => {
      setDuration(e.target.value);
    };

    return (
      <div
        className="relative flex flex-col lg:flex-row items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${howitwork})`, opacity: 0.9 }}
      >
        <div
          className="absolute inset-0 bg-[#f8f7f7]"
          style={{ opacity: 0.9, zIndex: -10 }}
        ></div>

        <div className="w-full lg:w-1/2 flex justify-center p-4 lg:p-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4 lg:mb-6 mx-4 lg:mx-6">
              <img src={bulbIcon} alt="bulb-icon" className="w-10 h-10 lg:w-10 lg:h-10 mr-3" />
              <h2 className="text-orange-500 text-lg lg:text-xl font-semibold">FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">Find Answers To Common Inquiries About Our Business.</h2>
            <img src={faq1} alt="Illustration" className="w-full max-w-sm mx-auto lg:max-w-md" />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 p-4 lg:p-12 h-[900px]">
          <Accordion />
        </div>
      </div>
    );
};

export default Questions;
