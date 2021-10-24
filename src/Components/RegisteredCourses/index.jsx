import React from 'react';
import { useSelector } from "react-redux";
import { List, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import { tagColor } from '../../constant/common';

export default function RegisteredCourses() {
    const state = useSelector(state => state.userReducer.courses);
    const data = state;

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, key) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Tag color={tagColor[key]}>{key+1}</Tag>}
                        title={
                        <NavLink to={`/coursedetail/${item.maKhoaHoc}`}>
                            {item.tenKhoaHoc}
                        </NavLink>
                    }
                    />
                </List.Item>
            )}
        />
    )
}
