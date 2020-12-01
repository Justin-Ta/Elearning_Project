import React from 'react';
import { Tabs, Card, Tooltip } from 'antd';
import UserInfo from '../../Components/UserInfo';
import InProgressCourses from '../../Components/InProgressCourses';
import RegisteredCourses from '../../Components/RegisteredCourses';
import { EditOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
const { TabPane } = Tabs;
const { Meta } = Card;

export default function UserProfile() {
    const state = useSelector(state => state.userReducer.userInfo);
    console.log("State", state)
    if (!state) return "";
    return (
        <div className="userProfile">

            <div className="userProfile_header" style={{ backgroundImage: "url('img/background/UserProfileBg.jpg')" }}>
                <div className="container">
                    <Card
                        style={{ width: "max-content", textAlign: "center", background: "#ffffffb8", padding: "0 20px", position: "relative" }}
                        cover={
                            <div className="userProfile_header_avatar">
                                <div className="rounded-circle userProfile_header_avatar_img">
                                    <img src="https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg"
                                        alt="avatar"
                                        className="w-100" />
                                </div>
                            </div>
                        }
                    >
                        <Meta title={state.username} description={state.email} />
                        <Tooltip placement="bottom" title={"Edit Avatar"}>
                            <div className="userProfile_header_editAvartarIcon">
                                <EditOutlined />
                            </div>
                        </Tooltip>
                    </Card>
                </div>
            </div>

            <div className="userProfile_tabs container">
                <div className="card-container py-5">
                    <Tabs type="card" size="large" tabBarGutter="0">
                        <TabPane tab="Profile" key="1">
                            <UserInfo userInfo={state} />
                        </TabPane>
                        <TabPane tab="In Progress" key="2">
                            <InProgressCourses />
                        </TabPane>
                        <TabPane tab="Registered" key="3">
                            <RegisteredCourses />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
