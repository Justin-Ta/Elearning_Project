import React from 'react';
import { Tabs, Card, Tooltip } from 'antd';
import UserInfo from '../../Components/UserInfo';
import RegisteredCourses from '../../Components/RegisteredCourses';
import { EditOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import PendingCourses from '../../Components/PendingCourses';
const { TabPane } = Tabs;

export default function UserProfile() {
    const state = useSelector(state => state.userReducer);
    const { taiKhoan: username } = state;
    if (!username) return "";
    return (
        <div className="userProfile">

            <div className="userProfile_header" style={{ backgroundImage: "url('img/background/UserProfileBg.jpg')" }}>
                <div className="container">
                    <Card
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
                        <TabPane tab="Registered" key="2">
                            <PendingCourses username={state.taiKhoan}/>
                        </TabPane>
                        <TabPane tab="Ready to learn" key="3">
                            <RegisteredCourses username={state.taiKhoan}/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
