import React from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;

export default function Sorting() {
    return (
        <div className="sorting">
        <Sider 
            breakpoint="lg"
            collapsedWidth="0"
            >
                <div className="m-3">
                    <h5>Sorting</h5>
                </div>
            
        </Sider>
        </div>
    )
}
