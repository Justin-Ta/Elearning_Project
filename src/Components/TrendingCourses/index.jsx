import { Pagination } from 'antd';
import React, { Component } from 'react';
import CourseList from '../CourseList';

export default class TrendingCourses extends Component {

    render() {
        return (
            <div className="trendingCourses">
                <div className="container">
                    <h3>The world's largest selection of courses</h3>
                    <div className="popularCourses">Most popular courses</div>
                    <CourseList />
                    <Pagination defaultCurrent={1} total={60} />
                </div>
            </div>
        )
    }
}
