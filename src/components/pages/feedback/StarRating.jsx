// StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
    const starsTotal = 5;
    const starsFilled = Math.round(rating * 2) / 2; // Round to nearest 0.5 for half stars

    const starIcons = [];
    for (let i = 1; i <= starsTotal; i++) {
        if (i <= starsFilled) {
            starIcons.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
        } else if (i === Math.ceil(starsFilled) && starsFilled % 1 !== 0) {
            starIcons.push(<i key={i} className="fas fa-star-half-alt text-yellow-500"></i>);
        } else {
            starIcons.push(<i key={i} className="far fa-star text-yellow-500"></i>);
        }
    }

    return (
        <div className="ml-2">
            {starIcons.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
};

export default StarRating;
