import { Pagination } from 'antd';
import React, { Component } from 'react';
import CourseList1 from '../CourseList1';

export default class TrendingCourses extends Component {

    render() {
        return (
            <div className="trendingCourses">
                <div className="container">
                    <h3>The world's largest selection of courses</h3>
                    <div className="popularCourses">Most popular courses</div>
                    <CourseList1 />
                    <Pagination defaultCurrent={1} total={60} />
                </div>
            </div>
        )
    }
}
