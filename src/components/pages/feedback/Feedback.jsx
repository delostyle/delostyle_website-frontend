import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import ambitionbox from "../../images/ambitionbox.png";
import glassdoor from "../../images/glassdoor.png";
import freelancer from "../../images/freelancer.png";
import clutch from "../../images/clutch.png";
import bulbIcon from "../../images/bulbIcon.png";
import Services from './Services';
import "./feedback.css";

const FeedBack = ({ data, loading }) => {
    const [feedbackDataget, setFeedbackDataget] = useState({});
    const [load, setLoading] = useState(loading);

    useEffect(() => {
        setFeedbackDataget(data?.feedbackData);
        setLoading(loading);
    }, [data]);

    const feedbackData = [
        { id: 1, title: 'Google', description: 'This is the first feedback card.', tags: ['tag1', 'tag2'], imageUrl: google, rating: 4.4 },
        { id: 2, title: 'Facebook', description: 'This is the second feedback card.', tags: ['tag3', 'tag4'], imageUrl: facebook, rating: 3.8 },
        { id: 3, title: 'Clutch', description: 'This is the first feedback card.', tags: ['tag1', 'tag2'], imageUrl: clutch, rating: 4.4 },
        { id: 4, title: 'AmbitionBox', description: 'This is the second feedback card.', tags: ['tag3', 'tag4'], imageUrl: ambitionbox, rating: 3.8 },
        { id: 5, title: 'GlassDoor', description: 'This is the first feedback card.', tags: ['tag1', 'tag2'], imageUrl: glassdoor, rating: 4.4 },
        { id: 6, title: 'Freelancer', description: 'This is the second feedback card.', tags: ['tag3', 'tag4'], imageUrl: freelancer, rating: 3.8 }
    ];

    const isSmallScreen = useMediaQuery({ query: '(max-width: 400px)' });
    const isMediumScreen = useMediaQuery({ query: '(max-width: 861px)' });

    return (
        <div className="review-section">
            <div className="flex-center p-4 sm:p-8 md:p-10 relative z-10">
                <div className="w-full">
                    {isSmallScreen ? (
                        <div className="grid grid-cols-1 gap-4">
                            {feedbackData.map(feedback => (
                                <div key={feedback.id} className="flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-lg bg-white p-4">
                                    <div className='flex gap-3 mb-2'>
                                        <img className="w-full" src={feedback.imageUrl} alt="Feedback" style={{ height: "40px", width: "40px" }} />
                                        <div className="font-bold text-sm sm:text-base flex items-center justify-center">{feedback.title}</div>
                                    </div>
                                    <hr />
                                    <div className="items-center mt-2">
                                        <span className="text-gray-700 text-sm sm:text-base mr-2">{"Rated " + feedback.rating.toFixed(1) + " Star"}</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, index) => (
                                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 sm:h-5 sm:w-5 fill-current ${index < Math.round(feedback.rating) ? 'text-yellow-500' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .65.38l1.9 3.29 3.82.56a.75.75 0 0 1 .42 1.28l-2.75 2.69.65 3.81a.75.75 0 0 1-1.09.79L10 13.36l-3.4 1.78a.75.75 0 0 1-1.09-.79l.65-3.81-2.75-2.69a.75.75 0 0 1 .42-1.28l3.82-.56 1.9-3.29A.75.75 0 0 1 10 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={`grid ${isMediumScreen ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}>
                            {feedbackData.map(feedback => (
                                <div key={feedback.id} className="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4 sm:p-3">
                                    <div className="flex gap-3 mb-2">
                                        <img className="w-full" src={feedback.imageUrl} alt="Feedback" style={{ height: "40px", width: "50px" }} />
                                        <div className="font-bold text-sm sm:text-base flex items-center justify-center">
                                            {feedback.title}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="items-center mt-2">
                                        <span className="text-gray-700 text-sm sm:text-base mr-2">
                                            {"Rated " + feedback.rating.toFixed(1) + " Star"}
                                        </span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, index) => (
                                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 sm:h-5 sm:w-5 fill-current ${index < Math.round(feedback.rating) ? 'text-yellow-500' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .65.38l1.9 3.29 3.82.56a.75.75 0 0 1 .42 1.28l-2.75 2.69.65 3.81a.75.75 0 0 1-1.09.79L10 13.36l-3.4 1.78a.75.75 0 0 1-1.09-.79l.65-3.81-2.75-2.69a.75.75 0 0 1 .42-1.28l3.82-.56 1.9-3.29A.75.75 0 0 1 10 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 md:p-10 rounded-lg m-4 sm:m-5 relative z-10">
                <div className="flex mb-5">
                    <img src={bulbIcon} alt="bulb-icon" className="w-6 h-6 sm:w-8 sm:h-8" />  
                    <h2 className="text-orange-500 text-lg sm:text-xl lg:text-2xl mb-2">{load ? "OUR SERVICES" : feedbackDataget?.serviceHeader}</h2>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 overflow-hidden">{load ? "Solutions For Your Company" : feedbackDataget?.solutionsHeader}</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {load ? "We are a young and creative company and we offer you fresh business ideas." : feedbackDataget?.firstParagraph}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {load ? "We are a group of industry experts who help you create the perfect strategies to take your business to the next level." : feedbackDataget?.secondParagraph}
                </p>
                <button className="bg-orange-500 text-white py-2 px-4 sm:py-2 sm:px-6 lg:py-3 lg:px-8 rounded-full text-sm lg:text-lg mt-4">
                    {load ? "Explore Solutions" : feedbackDataget?.buttonText}
                </button>
                <div className="feedback-section">
                    <Services />
                </div>
            </div>
        </div>
    );
};

export default FeedBack;
