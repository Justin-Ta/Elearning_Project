import React from 'react';
import { Card } from 'antd';
import RatingStars from '../RatingStars';
import { NavLink } from 'react-router-dom';

export default function CourseItem(props) {
    const { title, image, path, author, price } = props.course;
    const url = '/coursedetail/'+ path;
    return (
        <div className="courseItem">
            <NavLink to={url}>
                <Card
                    hoverable
                    cover={
                        <img className="imgCourse img-fluid"
                            alt={image}
                            src={image}
                        />
                    }
                >
                    <div className="title">
                        {title}
                    </div>
                <div className="author">{author.join(', ')}</div>
                    <RatingStars score={4.5} />
                    {/* <div className="price">${price || 0}
                        <span>$17.55</span>
                    </div> */}
                    <br />
                    <br/>
                    <span className="bestseller">Bestseller</span>
                </Card>
            </NavLink>
        </div>
    )
}



