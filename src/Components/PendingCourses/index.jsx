import React from 'react';
import { List, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tagColor } from '../../constant/common';

export default function PendingCourses() {
    const state = useSelector(state => state.userReducer.registeredCourses);
    const data = state;
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, key) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Tag color={tagColor[key]}>{key +1}</Tag>}
                        title={
                        <NavLink to={'/coursedetail/'+ encodeURIComponent(item.path)}>
                            {item.title}
                        </NavLink>
                    }
                    />
                </List.Item>
            )}
        />
    )
}
