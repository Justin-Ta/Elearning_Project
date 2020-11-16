import React, { useEffect } from 'react';
import CourseList2 from '../../Components/CourseList2';
import { Layout, Pagination, Spin } from 'antd';
import { useParams } from 'react-router';
import BreadcrumbList from '../../Components/BreadcrumbList';
import { useSelector, useDispatch } from "react-redux";
import { getCategoryCoursesAction } from '../../redux/actions/course';
const { Content, Sider } = Layout;

export default function CategoryDetail() {
    console.count("CategoryDetail");

    const { name } = useParams();
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
            <div className="container">
                {BreadcrumbList(name)}
                <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Courses</h2>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    {isLoading ?
                        <Spin tip="Loading..." size={"large"}></Spin>
                        :
                        <>
                            <Sider width={200} className="site-layout-background" style={{ backgroundColor: 'grey' }}>
                                <h5>Sorting</h5>
                            </Sider>
                            <Content style={{ overflow: 'visible' }}>
                                <CourseList2 courses={state.items} />
                                <div className="mt-5">
                                    <Pagination
                                        pageSize={state.count}
                                        total={state.totalCount}
                                        onChange={changePage}
                                        hideOnSinglePage={true}
                                    />
                                </div>
                            </Content>
                        </>
                    }
                </Layout>
            </div>
        </div>
    )
}
