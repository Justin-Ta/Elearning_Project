import React from 'react';
import CourseItem from '../CourseItem';
import { Row, Col } from 'antd';


export default function CourseList1(props) {

    const courseItems = props.courses?.map( (course, index) => {
        return (
            <Col lg={6} sm={12} xs={24} key={index}>
                <div className="courseItemSmall">
                    <CourseItem course={course}/>
                </div>
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


