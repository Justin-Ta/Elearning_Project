import React from 'react';
import { List, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tagColor } from '../../constant/common';

export default function PendingCourses(props) {
    const state = useSelector(state => state.userReducer.KhoaHocChoXetDuyet);
    const data = state;
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, key) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Tag color={tagColor[key]}>{key}</Tag>}
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
