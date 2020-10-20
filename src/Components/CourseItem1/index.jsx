import React from 'react';
import { Card } from 'antd';
import RatingStars from '../RatingStars';

export default function CourseItem1(props) {
    console.count("CourseItem1");
    const { tenKhoaHoc, hinhAnh } = props.course;
    return (
        <div className="courseItem1">
            <Card
                hoverable
                cover={
                    <img
                        alt={hinhAnh}
                        src={hinhAnh}
                    />
                }
            >
                <div className="title">
                    {tenKhoaHoc}
                </div>
                <div className="author">czc Lorem ipsum dolor sit.</div>
                <RatingStars score={4.5} />
                <span className="ratingCore">4.5</span>
                <div className="price">$12.99
                <span>$17.55</span>
                </div>
                <span className="bestseller">Bestseller</span>
            </Card>
        </div>
    )
}



