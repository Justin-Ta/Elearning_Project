import React from 'react';
import { Card } from 'antd';
import RatingStars from '../ratingStars';
import { NavLink } from 'react-router-dom';

export default function CourseItem(props) {
    console.count("CourseItem");
    const { tenKhoaHoc, hinhAnh,  maKhoaHoc} = props.course;
    return (
        <div className="courseItem">
            <NavLink to={`/coursedetail/${maKhoaHoc}`}>
            <Card
                hoverable
                cover={
                    <img className="imgCourse img-fluid"
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
                <div className="price">$12.99
                <span>$17.55</span>
                </div>
                <span className="bestseller">Bestseller</span>
            </Card></NavLink>
            
        </div>
    )
}



