import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import updateBg from "../../images/updateBg.jpg"; 
import up1 from "../../images/up1.jpg";
import up2 from "../../images/up2.jpg";
import up3 from "../../images/up3.jpg";
import facebook from "../../images/facebook.png";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FF6600",
                border: "3px solid #FF660061",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                zIndex: 1,
                right: "10px",
            }}
            onClick={onClick}
        >
            <span style={{ fontSize: "20px" }}>›</span>
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FF6600",
                border: "3px solid #FF660061",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                zIndex: 1,
                left: "10px",
            }}
            onClick={onClick}
        >
            <span style={{ fontSize: "20px" }}>‹</span>
        </div>
    );
};

const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
        return {
            truncated: words.slice(0, wordLimit).join(' ') + '... ',
            full: description
        };
    }
    return { truncated: description, full: description };
};

const SocialUpdates = () => {
    const [expandedId, setExpandedId] = useState(null);

    const feedbackData = [
        {
            id: 1,
            description: 'Take your business to the next level with Delostyle...Read Moreasd/asdnklasdklasdhnlkashdlhaslkhdlahlasdlksahdlashdlhsdlh',
            imageUrl: up1,
            media: facebook,
            date: "27 June 2024"
        },
        {
            id: 2,
            description: 'The cats out of the bag! Who knew a tiny could asdhnlkasdjasl;jd;aljsd;asjdasj;asjdk;asd;alsd;asd;asdj;asldj;asljd;asd',
            imageUrl: up2,
            media: facebook,
            date: "25 June 2024"
        },
        {
            id: 3,
            description: 'Level up your business strategy with DelostyleStudiod;asjld;alsjd;asjd;asjd;asdj;asljd;lasjd;asjd;asjd;sajd;sj;ldjas;djlas',
            imageUrl: up3,
            media: facebook,
            date: "22 June 2024"
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1102,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 757,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="flex-center" style={{ 
            backgroundImage: `url(${updateBg})`, 
            backgroundSize: 'cover', 
            padding: '20px', 
            width: '100%', 
            position: 'relative', 
            overflow: 'hidden',
            opacity: "0.8"
        }}>
            <div style={{
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                zIndex: 0
            }}></div>

            <Slider className='overflow-hidden p-10' {...settings}>
                {feedbackData.map(feedback => {
                    const { truncated, full } = truncateDescription(feedback.description, 6);
                    return (
                        <div key={feedback.id} className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 bg-white" style={{ 
                            height: '300px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                        }}>
                            <div className="px-6 py-4 flex flex-col h-full">
                                <img className="w-full" src={feedback.imageUrl} alt="Feedback" style={{ height: "150px", objectFit: "cover" }} />
                                <div className="mt-2 flex-grow">
                                    <p className="text-gray-700 text-base whitespace-normal w-[260px] h-[40px]">
                                        {expandedId === feedback.id ? full : truncated}
                                        {full.length > truncated.length && (
                                            <span 
                                                style={{ color: 'blue', cursor: 'pointer' }} 
                                                onClick={() => setExpandedId(expandedId === feedback.id ? null : feedback.id)}
                                            >
                                                {expandedId === feedback.id ? ' show less' : 'read more'}
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex p-5 items-center">
                                <span className="text-gray-700 text-base mr-2">{feedback.date}</span>
                                <img className="ml-auto" src={feedback.media} alt="Feedback" style={{ height: "30px", width: "30px" }} />
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default SocialUpdates;
