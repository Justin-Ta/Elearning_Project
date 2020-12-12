import React, { useEffect, useState } from 'react';
import CourseList2 from '../../Components/CourseList2';
import { Pagination } from 'antd';
import { useParams } from 'react-router';
import BreadcrumbList from '../../Components/BreadcrumbList';
import { useSelector, useDispatch } from "react-redux";
import { getCategoryCoursesAction } from '../../redux/actions/course';
import { categoryDisplayNames, categoryNames, pageSize } from '../../constant/common';
import Loading from '../../Components/Loading';
//import Sorting from '../../Components/Sorting';

export default function CategoryDetail(props) {
    const { name } = useParams();
    if ( !categoryNames.includes(name) ) props.history.push('/*');
    const state = useSelector(state => state.coursesInCategory);
    const [currentPage, setCurrentPage] = useState(1);
    let isLoading = !state;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryCoursesAction(name));
    }, [dispatch, name])

    const changePage = (page) => {
        console.log(page);
        setCurrentPage(page);
    }

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
                            {/* <Sorting/> */}
                            <div className="col-12">
                                <CourseList2 courses={state.slice((currentPage-1)*pageSize,currentPage*pageSize)}/>
                                <div className="mt-5">
                                    <Pagination
                                        pageSize={pageSize}
                                        total={state.length}
                                        onChange={changePage}
                                        hideOnSinglePage={true}
                                    />
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
