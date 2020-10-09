import React, { Component } from 'react'
import { Card } from 'antd';

export default class CourseItem extends Component {
    render() {
        return (
            <Card
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
                <div className="price">$12.99 
                <span>$17.55</span> 
                </div>
                <span className="bestseller">Bestseller</span>
            </Card>
        )
    }
}
