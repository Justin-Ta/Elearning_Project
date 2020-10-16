import React, { Component } from 'react';
import CourseItem1 from '../CourseItem1';
import { Row, Col } from 'antd';

export default class CourseList1 extends Component {

    renderCoursesItem() {
        let CourseItems = [];
        for (let i = 0; i < 10; i++) {
            CourseItems.push(
                <Col
                 className="col-layout"
                 key={i}>
                    <CourseItem1 />
                </Col>
            );
        }
        return CourseItems;
    }

    render() {
        return (
            <div className="courseList1">
                <Row gutter={[16, 30]}>
                    {this.renderCoursesItem()}
                </Row>
            </div>
        )
    }
}
