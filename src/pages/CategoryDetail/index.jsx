import React, { useEffect, useState, useRef } from 'react';
import CourseList2 from '../../Components/CourseList2';
import { Pagination } from 'antd';
import { useParams } from 'react-router';
import BreadcrumbList from '../../Components/BreadcrumbList';
import { categoryDisplayNames, categoryNames } from '../../constant/common';
import Loading from '../../Components/Loading';
import { getCategoryCoursesService } from '../../Axios/course';
//import Sorting from '../../Components/Sorting';

export default function CategoryDetail(props) {
    const { name } = useParams();
    if (!categoryNames.includes(name)) props.history.push('/*');
    const [isLoading, setIsLoading] = useState(true);
    const state = useRef({
        currentPage: 1,
        count: 0,
        totalPages: 0,
        totalCount: 0,
        coursePerPage: 0,
        items: []
    });

    const getCourses = (page) => {
        setIsLoading(true)
        getCategoryCoursesService(name, page)
            .then(res => {
                const { courses, total_page, current_page, total_course } = res.data;
                state.current = {
                    currentPage: current_page,
                    count: courses.length,
                    totalPages: total_page,
                    totalCount: total_course,
                    items: courses || [],
                    coursePerPage: Math.ceil(total_course / total_page)
                }
            })
            .catch(err => {
                state.current.count = 0;
            })
            .finally(() => setIsLoading(false));
    }

    
    useEffect(() => {
        setIsLoading(true)
        getCategoryCoursesService(name, 1)
            .then(res => {
                const { courses, total_page, current_page, total_course } = res.data;
                state.current = {
                    currentPage: current_page,
                    count: courses.length,
                    totalPages: total_page,
                    totalCount: total_course,
                    items: courses || [],
                    coursePerPage: Math.ceil(total_course / total_page)
                }
            })
            .catch(err => {
                state.current.count = 0;
            })
            .finally(() => setIsLoading(false));
    }, [name])

    return (
        <div className="search mb-5">
            {BreadcrumbList(name)}
            <div className="container pt-4">
                <h2>{categoryDisplayNames[name]} Courses</h2>
                <div style={{ backgroundColor: 'transparent' }} className="d-flex justify-content-center">
                    {isLoading ?
                        <Loading />
                        :
                        <>
                            {state.current.items.length > 0 ? (
                                <div className="col-12">
                                    <CourseList2 courses={state.current.items} />
                                    <div className="mt-5">
                                        <Pagination
                                            pageSize={state.current.coursePerPage}
                                            total={state.current.totalCount}
                                            onChange={(currentPage) => getCourses(currentPage)}
                                            hideOnSinglePage={true}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <p className="">There is no course in {categoryDisplayNames[name]} category</p>
                            )}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
