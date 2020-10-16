import React, { Component } from 'react';
import { Card } from 'antd';
import RatingStars from '../RatingStars';

export default class CourseItem1 extends Component {
    render() {
        return (
            <div className="courseItem1">
                <Card
                    hoverable
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                >
                    <div className="title">
                        Ant Design bhu juhkuh uhkh Lorem, ipsum dolor fvs dvdv dczc.
                </div>
                    <div className="author">czc Lorem ipsum dolor sit.</div>
                        {RatingStars(4.5)}
                    <span className="ratingCore">4.5</span>
                    <div className="price">$12.99
                <span>$17.55</span>
                    </div>
                    <span className="bestseller">Bestseller</span>
                </Card>
            </div>
        )
    }
}
