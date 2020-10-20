import { Pagination, Spin } from 'antd';
import React, { useEffect } from 'react';
import CourseList1 from '../CourseList1';
import { useSelector, useDispatch } from "react-redux";
import { changeTrendingCoursesAction } from '../../redux/actions/course';

export default function TrendingCourses() {
    console.count("TrendingCourses");
    const state = useSelector(state => state.trendingCourses);
    let isLoading = !state;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTrendingCoursesAction(1));
    },[dispatch])

    const changePage = (currentPage) => {
        dispatch(changeTrendingCoursesAction(currentPage));
    }

    return (
        <div className="trendingCourses">
            <div className="container">
                <h3>The world's largest selection of courses</h3>
                <div className="popularCourses">Most popular courses</div>
                {isLoading ?
                <Spin tip="Loading..." size={"large"}></Spin>
                :
                <>
                    <CourseList1 courses={state.items} />
                    <Pagination
                        pageSize={4}
                        total={state.totalCount}
                        onChange={changePage}
                        hideOnSinglePage={true}
                    />
                </>}
            </div>
        </div>
    )
}



