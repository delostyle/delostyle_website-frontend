import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import ambitionbox from "../../images/ambitionbox.png";
import glassdoor from "../../images/glassdoor.png";
import freelancer from "../../images/freelancer.png";
import clutch from "../../images/clutch.png";
import bulbIcon from "../../images/bulbIcon.png";
import arrow1 from "../../images/arrow1.png";
import arrow2 from "../../images/arrow2.png";
import Services from './Services';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div 
            onClick={onClick} 
            style={{ 
                position: 'absolute', 
                top: '50%', 
                right: '-25px', 
                transform: 'translateY(-50%)', 
                zIndex: 1, 
                cursor: 'pointer' 
            }}
        >
            <img src={arrow1} alt="Next" style={{ width: '30px', height: '30px' }} />
        </div>
    );
};

// Custom previous arrow component with inline styles
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div 
            onClick={onClick} 
            style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '-25px', 
                transform: 'translateY(-50%)', 
                zIndex: 1, 
                cursor: 'pointer' 
            }}
        >
            <img src={arrow2} alt="Previous" style={{ width: '30px', height: '30px' }} />
        </div>
    );
};

const FeedBack = ({ data, loading }) => {
    const [feedbackDataget, setFeedbackDataget] = useState({});
    const [load, setLoading] = useState(loading);

    useEffect(() => {
        setFeedbackDataget(data?.feedbackData);
        setLoading(loading);
    }, [data]);

    const feedbackData = [
        { id: 1, title: 'Google', description: 'This is the first feedback card.', tags: ['tag1', 'tag2'], imageUrl: google, rating: 4.4 },
        { id: 2, title: 'Facebook', description: 'This is the second feedback card.', tags: ['tag3', 'tag4'], imageUrl: facebook, rating: 5.0 },
        { id: 3, title: 'Clutch', description: 'This is the first feedback card.', tags: ['tag1', 'tag2'], imageUrl: clutch, rating: 5.0 },
        { id: 4, title: 'AmbitionBox', description: 'This is the second feedback card.', tags: ['tag3', 'tag4'], imageUrl: ambitionbox, rating: 4.8 },
        { id: 5, title: 'GlassDoor', description: 'This is the first feedback card.', tags: ['tag1', 'tag2'], imageUrl: glassdoor, rating: 4.7 },
        { id: 6, title: 'Freelancer', description: 'This is the second feedback card.', tags: ['tag3', 'tag4'], imageUrl: freelancer, rating: 5.0 }
    ];

    const isMediumScreen = useMediaQuery({ query: '(max-width: 768px)' });

    // Slick slider settings with custom arrows and no dots
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div style={{ padding: '20px 40px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 , }}>
                <div style={{ width: '80%' }}>
                    {isMediumScreen ? (
                        <Slider {...sliderSettings}>
                            {feedbackData.map(feedback => (
                                <div 
                                    key={feedback.id} 
                                    style={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        borderRadius: '10px', 
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
                                        backgroundColor: '#fff', 
                                        padding: '16px',
                                    }}
                                    className="ss"
                                >
                                    <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
                                        <img src={feedback.imageUrl} alt="Feedback" style={{ height: '40px', width: '30px' }} />
                                        <div style={{ fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {feedback.title}
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ marginTop: '8px', textAlign: 'center' }}>
                                        <span style={{ color: '#4A4A4A', fontSize: '14px', marginRight: '8px' }}>
                                            {"Rated " + feedback.rating.toFixed(1) + " Star"}
                                        </span>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            {[...Array(5)].map((_, index) => (
                                                <svg 
                                                    key={index} 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    style={{ 
                                                        height: '16px', 
                                                        width: '16px', 
                                                        fill: index < Math.round(feedback.rating) ? '#FFD700' : '#D3D3D3' 
                                                    }} 
                                                    viewBox="0 0 20 20" 
                                                    fill="currentColor"
                                                >
                                                    <path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .65.38l1.9 3.29 3.82.56a.75.75 0 0 1 .42 1.28l-2.75 2.69.65 3.81a.75.75 0 0 1-1.09.79L10 13.36l-3.4 1.78a.75.75 0 0 1-1.09-.79l.65-3.81-2.75-2.69a.75.75 0 0 1 .42-1.28l3.82-.56 1.9-3.29A.75.75 0 0 1 10 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
                            {feedbackData.map(feedback => (
                                <div 
                                    key={feedback.id} 
                                    style={{ 
                                        width: '100%', 
                                        borderRadius: '10px', 
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
                                        backgroundColor: '#fff', 
                                        padding: '16px' 
                                    }}
                                >
                                    <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
                                        <img src={feedback.imageUrl} alt="Feedback" style={{ height: '40px', width: '50px' }} />
                                        <div style={{ fontWeight: 'bold', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {feedback.title}
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ marginTop: '8px', textAlign: 'center' }}>
                                        <span style={{ color: '#4A4A4A', fontSize: '14px', marginRight: '8px' }}>
                                            {"Rated " + feedback.rating.toFixed(1) + " Star"}
                                        </span>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            {[...Array(5)].map((_, index) => (
                                                <svg 
                                                    key={index} 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    style={{ 
                                                        height: '16px', 
                                                        width: '16px', 
                                                        fill: index < Math.round(feedback.rating) ? '#FFD700' : '#D3D3D3' 
                                                    }} 
                                                    viewBox="0 0 20 20" 
                                                    fill="currentColor"
                                                >
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

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px', borderRadius: '10px', margin: '16px', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                    <img src={bulbIcon} alt="bulb-icon" style={{ width: '24px', height: '24px' }} />  
                    <h2 style={{ color: '#FF6600', fontSize: '24px', marginBottom: '8px', marginLeft: '8px' }}>
                        {load ? "OUR SERVICES" : feedbackDataget?.serviceHeader}
                    </h2>
                </div>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>
                    {load ? "Solutions For Your Company" : feedbackDataget?.solutionsHeader}
                </h2>
                <p style={{ color: '#666', marginBottom: '24px' }}>
                    {load ? "We are a young and creative company and we offer you fresh business ideas." : feedbackDataget?.firstParagraph}
                </p>
                <p style={{ color: '#666', marginBottom: '24px' }}>
                    {load ? "We are a group of industry experts who help you create the perfect strategies to take your business to the next level." : feedbackDataget?.secondParagraph}
                </p>
                <button 
                    style={{ 
                        backgroundColor: '#FF6600', 
                        color: '#fff', 
                        padding: '8px 16px', 
                        borderRadius: '20px', 
                        fontSize: '18px', 
                        marginTop: '16px', 
                        cursor: 'pointer' 
                    }}
                >
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
