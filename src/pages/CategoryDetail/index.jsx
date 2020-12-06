import React, { useEffect } from 'react';
import CourseList2 from '../../Components/CourseList2';
import { Pagination } from 'antd';
import { useParams } from 'react-router';
import BreadcrumbList from '../../Components/BreadcrumbList';
import { useSelector, useDispatch } from "react-redux";
import { getCategoryCoursesAction } from '../../redux/actions/course';
import { categoryNames, pageSize } from '../../constant/common';
import Loading from '../../Components/Loading';
import Sorting from '../../Components/Sorting';

export default function CategoryDetail(props) {
    //console.count("CategoryDetail");

    const { name } = useParams();
    if ( !categoryNames.includes(name) ) props.history.push('/*');
    const state = useSelector(state => state.coursesInCategory);
    let isLoading = !state;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryCoursesAction(1, ""));
    }, [dispatch])

    const changePage = (currentPage) => {
        dispatch(getCategoryCoursesAction(currentPage, ""));
    }

    return (
        <div className="search mb-5">
            {BreadcrumbList(name)}
            <div className="container pt-4">
                <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Courses</h2>
                <div style={{ backgroundColor: 'transparent' }} className="d-flex ">
                    {isLoading ?
                        <Loading />
                        :
                        <>
                            {/* <Sorting/> */}
                            <div className="col-12">
                                <CourseList2 courses={state.items}/>
                                <div className="mt-5">
                                    <Pagination
                                        pageSize={pageSize}
                                        total={state.totalCount}
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
