import React from 'react';
import { Card } from 'antd';
import RatingStars from '../RatingStars';
import { NavLink } from 'react-router-dom';

export default function CourseItem(props) {
    const { tenKhoaHoc, hinhAnh, maKhoaHoc, moTa } = props.course;
    const url = '/coursedetail/'+ encodeURIComponent(maKhoaHoc);
    return (
        <div className="courseItem">
            <NavLink to={url}>
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
                <div className="author">{moTa}</div>
                    <RatingStars score={4.5} />
                    <div className="price">$12.99
                        <span>$17.55</span>
                    </div>
                    <span className="bestseller">Bestseller</span>
                </Card>
            </NavLink>
        </div>
    )
}



