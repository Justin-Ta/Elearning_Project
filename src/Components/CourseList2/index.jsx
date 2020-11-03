import React from 'react';
import CourseItem1 from '../CourseItem1';

export default function CourseList2 (props) {
    const courseItems = props.courses.map( (course, index) => {
        return (
            <div className="mt-3" key={index}>
                <CourseItem1 course={course}/>
            </div>   
        )
    });

    return (
        <div className="courseList2">
            {courseItems}
        </div>
    )
}
