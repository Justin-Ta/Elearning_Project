import React from 'react';

export default function RatingStars(props) {
    console.count("render rating stars");
    let stars = [];
    for (let i = 0; i < Math.floor(props.score); i++) {
        stars.push(
            <img className="star" src="/img/icon/star.png" alt="star" key={i}/>
        );
    }
    props.score % Math.floor(props.score) && stars.push(
            <img className="halfstar" src="/img/icon/halfstar.png" alt="halfstarr" key={props.score}/>
    );

    return (
        <div className="ratingStars">
            {stars}
        </div>
    )
}
