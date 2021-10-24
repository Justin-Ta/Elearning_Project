import React from 'react';
import { Tabs } from 'antd';
import UserInfo from '../../Components/UserInfo';
import RegisteredCourses from '../../Components/RegisteredCourses';
import { useSelector } from "react-redux";
import PendingCourses from '../../Components/PendingCourses';
import UploadAvatar from '../../Components/UploadAvatar';


const { TabPane } = Tabs;

export default function UserProfile() {
    const state = useSelector(state => state.userReducer);
    const { firstname, avatar } = state;
    if (!firstname) return "";
    return (
        <div className="userProfile">

            <div className="userProfile_header" style={{ backgroundImage: "url('img/background/UserProfileBg.jpg')" }}>
                <div className="container">
                    <UploadAvatar avatar={avatar}/>
                </div>
            </div>

            <div className="userProfile_tabs container">
                <div className="card-container py-5">
                    <Tabs type="card" size="large" tabBarGutter="0">
                        <TabPane tab="Profile" key="1">
                            <UserInfo userInfo={state} />
                        </TabPane>
                        <TabPane tab="Registered" key="2">
                            <PendingCourses />
                        </TabPane>
                        <TabPane tab="Ready to learn" key="3">
                            <RegisteredCourses />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
