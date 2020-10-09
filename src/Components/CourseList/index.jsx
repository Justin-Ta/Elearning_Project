import React, { Component } from 'react'
import CourseItem from '../../Components/CourseItem'
import { Row, Col } from 'antd';

export default class CourseList extends Component {

    renderCoursesItem() {
        let CourseItems = [];
        for (let i = 0; i < 10; i++) {
            CourseItems.push(
                <Col span={6}>
                    <CourseItem />
                </Col>
            );
        }
        return CourseItems;
    }

    render() {
        return (
            <div className="courseList">
                <Row gutter={[16, 30]}>
                    {this.renderCoursesItem()}
                </Row>
            </div>
        )
    }
}
