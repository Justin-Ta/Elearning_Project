import { Pagination } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import CourseList1 from '../CourseList1';
import Loading from '../Loading';
import { getTrendingCoursesService } from '../../Axios/course';

export default function TrendingCourses() {
    const [isLoading, setisLoading] = useState(true)
    const state = useRef({
        currentPage: 1,
        count: 0,
        totalPages: 0,
        totalCount: 0,
        coursePerPage: 0,
        items: []
    });

    useEffect(() => {
        getCourses(1);
    }, [])

    const getCourses = (page) => {
        setisLoading(true)
        getTrendingCoursesService(page)
            .then(res => {
                const { courses, total_page, current_page, total_course } = res.data;
                state.current = {
                    currentPage: current_page,
                    count: courses.length,
                    totalPages: total_page,
                    totalCount: total_course,
                    items: courses,
                    coursePerPage: Math.ceil(total_course / total_page)
                }
            })
            .catch(err => {
                state.current.count = 0;
            })
            .finally(() => setisLoading(false));
    }

    return (
        <div className="trendingCourses">
            <div className="container">
                <h3>The world's largest selection of courses</h3>
                <div className="popularCourses">Most popular courses</div>
                {isLoading ?
                    <Loading />
                    :
                    <>
                        {
                            state.current.count ? (
                                <>
                                    <CourseList1 courses={state.current.items} />
                                    <Pagination
                                        pageSize={state.current.coursePerPage}
                                        total={state.current.totalCount}
                                        onChange={(currentPage) => getCourses(currentPage)}
                                        hideOnSinglePage={true}
                                    />
                                </>
                            ) : (
                                <p>Some thing went wrong</p>
                            )
                        }
                    </>
                }
            </div>
        </div>
    )
}



