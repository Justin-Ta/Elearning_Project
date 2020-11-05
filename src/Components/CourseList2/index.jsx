import React from 'react';
import CourseItem from '../CourseItem';

export default function CourseList2 (props) {
    const courseItems = props.courses.map( (course, index) => {
        return (
            <div className="mt-3" key={index}>
                <div className="courseItemLarge">
                    <CourseItem course={course}/>
                </div>
            </div>   
        )
    });

    return (
        <div className="courseList2">
            <div className="ml-5">
            {courseItems}
            </div>
        </div>
    )
}
