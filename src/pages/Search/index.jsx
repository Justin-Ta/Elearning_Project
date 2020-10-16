import { Layout, Pagination } from 'antd';
import React from 'react';
import CourseList2 from '../../Components/CourseList2';

const { Content, Sider } = Layout;

export default function Search() {
    return (
        <div className="search mt-5 mb-5">
            <div className="container">
                <h2>3333 results for "key word"</h2>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Sider width={200} className="site-layout-background" style={{ backgroundColor: 'transparent' }}>
                        <h5>Sorting component</h5>
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
