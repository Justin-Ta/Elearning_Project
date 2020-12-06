import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Loading() {
    return (
        <div style={{ position: "relative", marginTop: "50px"}}>
            <Spin indicator={antIcon} tip="Enjoy waiting"/>
            <img src="/img/icon/waitingBg.gif" alt="loading" className="mx-auto d-block w-50" />
        </div>
    )
}
