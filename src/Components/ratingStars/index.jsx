import React from 'react';

export default function RatingStars(score) {

    let stars = [];
    for (let i = 0; i < Math.floor(score); i++) {
        stars.push(
            <img className="star" src="/img/icon/star.png" alt="star" key={i}/>
        );
    }
    score % Math.floor(score) && stars.push(
            <img className="halfstar" src="/img/icon/halfstar.png" alt="halfstarr" key={score}/>
        );
        


    return (
        <div className="ratingStars">
            {stars}
        </div>
    )
}
