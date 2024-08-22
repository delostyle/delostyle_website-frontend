import React from "react";
import bulbIcon from "../../../images/bulbIcon.png";
import faq2 from "../../../images/faq2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Queries() {
    return (
        <div 
            className="consulting-banner relative flex bg-center bg-no-repeat bg-cover mt-10 overflow-hidden"
            style={{
                background: 'linear-gradient(108.17deg, #00274D 32.68%, #005BB3 100.49%)',
                height: "550px"
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-20 text-white">
            <div className="relative z-10 flex flex-col items-start text-left gap-10 p-5">
    <div className="w-full">
        <div className="flex mb-5 items-center h-10 justify-start">
            <img src={bulbIcon} alt="bulb-icon" className="bulb-icon mr-3" />
            <h2 className="text-orange-500 text-xl md:text-2xl" style={{ fontSize: "20px" }}>YOUR QUERIES</h2>
        </div>
        <div className="flex flex-col items-start">
            <h1 className="text-white font-bold text-lg md:text-4xl leading-relaxed w-full md:w-[500px]">
                Need Answers? Get Your Queries Professionally Addressed
            </h1>
            <p className="mt-6 md:mt-6 text-sm md:text-lg">
                Ensure all your questions are answered with precision. If you can't find what you're looking for in our FAQ section, connect with us directly for personalized assistance.
            </p>
            <div className="w-full flex justify-start mt-6 md:mt-10">
                <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm md:text-lg flex items-center">
                    Watch Story
                    <FontAwesomeIcon icon={faPlay} className="mx-2" />
                </button>
            </div>
        </div>
    </div>
</div>

                <img 
                    src={faq2} 
                    alt="work-together-border" 
                    className="hidden  right-0 lg:block" 
                    style={{ width: '560px', height: '560px' }} 
                />
            </div>
        </div>
    );
}
