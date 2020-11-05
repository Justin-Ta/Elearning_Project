import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


export default function UserProfile() {
    return (
        <div className="userProfile">
            <div className="userProfile_header">
                <div className="container">
                    <div className="row py-5">
                        <div className="userProfile_header_border-90 rounded-lg">
                        </div>
                        <div className="rounded-lg userProfile_header_avatar">
                            <img src="https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg"
                                alt="avatar"
                                className="w-100" />
                        </div>
                        <div className="userProfile_header_username">
                            <h1>Vo Hoang Anh Thu</h1>
                            <p>newzon263@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="userProfile_tabs container">
                <div className="card-container pt-5">
                    <Tabs type="card">
                        <TabPane tab="Profile" key="1">
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                        </TabPane>
                        <TabPane tab="In Progress" key="2">
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                        </TabPane>
                        <TabPane tab="Registered" key="3">
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
