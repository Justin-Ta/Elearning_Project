import React from 'react';
import CourseList2 from '../../Components/CourseList2';
import { Layout, Pagination } from 'antd';
import { useParams } from 'react-router';
import BreadcrumbList from '../../Components/BreadcrumbList';

const { Content, Sider } = Layout;

export default function CategoryDetail() {
    const { name } = useParams();
    return (
        <div className="search mb-5">
            <div className="container">
                {BreadcrumbList(name)}
                <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Courses</h2>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Sider width={200} className="site-layout-background" style={{ backgroundColor: 'transparent' }}>
                        <h5>Sorting</h5>
                    </Sider>
                    <Content style={{ overflow: 'visible' }}>
                        <CourseList2 />
                        <div className="mt-5">
                            <Pagination defaultCurrent={1} total={60} />
                        </div>
                    </Content>
                </Layout>
            </div>
        </div>
    )
}
