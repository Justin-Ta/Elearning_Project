import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ArrowLeftOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Loading from '../../Components/Loading';
import { useHistory } from 'react-router-dom';
import { getCourseDetailService } from '../../Axios/course';
import { List } from 'antd';


export default function CourseDetail(props) {
    const history = useHistory();
    const path = props.match.params.id;
    const [isLoadingEntryPape, setIsLoadingEntryPape] = useState(true);
    const User = useSelector((state) => state.userReducer);
    const [state, setstate] = useState(null);
    const [CurrentVideo, setCurrentVideo] = useState("")

    useEffect(() => {
        getCourseDetailService(path)
            .then(res => {
                if (!res.data.source) history.push(`/coursedetail/${path}`)
                setstate(res.data);
                setCurrentVideo(res.data.source[0]);
            })
            .catch(err => { history.push(`/coursedetail/${path}`) })
            .finally(() => setIsLoadingEntryPape(false))
    }, [path, User.registeredCourses, history])

    return (
        <div className="courseDetail">
            {
                isLoadingEntryPape ?
                    <Loading />
                    :
                    <>
                        <div className="container py-5">
                            <div className="d-flex align-items-center mb-3 backBtn" onClick={() => history.push(`/coursedetail/${path}`)}>
                                <ArrowLeftOutlined className="mr-2" /> <span>Back to course detail</span>
                            </div>
                            <div className="d-flex">
                                <div className="w-75">
                                    <div className="videoWrapper">
                                        <iframe src={CurrentVideo} title={state.title}/>
                                    </div>
                                    <br />
                                    <h3>{state.title}</h3>
                                </div>
                                <div className="pl-5 listWrapper w-25">
                                    <List
                                        size="large"
                                        bordered
                                        itemLayout="horizontal"
                                        dataSource={state.source}
                                        renderItem={(item, i) => (
                                            <List.Item className={item === CurrentVideo ? 'active' : ''} onClick={() => setCurrentVideo(item)}>
                                                <List.Item.Meta
                                                    avatar={<VideoCameraOutlined />}
                                                    title={<span>Session {i + 1}</span>}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}


