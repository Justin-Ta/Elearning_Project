import React from 'react';
import CourseItem1 from '../CourseItem1';
import { Row, Col } from 'antd';


export default function CourseList1(props) {

    const courseItems = props.courses?.map( (course, index) => {
        return (
            <Col lg={6} sm={12} xs={24} key={index}>
                <CourseItem1 course={course}/>
            </Col>
        )
    });

    console.count("CourseList1");
    return (
        <div className="courseList1">
                <Row gutter={[16, 30]}>
                    {courseItems}
                </Row>
        </div>
    )
}


