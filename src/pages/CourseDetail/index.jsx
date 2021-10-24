import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerCourseAction, unRegisterCourseAction } from '../../redux/actions/course';
import { Card, Button, message, Rate, Popconfirm } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
// import CommentList from '../../Components/CommentList';
import Loading from '../../Components/Loading';
import { useHistory } from 'react-router-dom';
import { getCourseDetailService } from '../../Axios/course';

const STATUS = {
    NEW: 'new',
    REGISTER: 'register',
    APPROVE: 'approve'
}

export default function CourseDetail(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const path = props.match.params.id;
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingEntryPape, setIsLoadingEntryPape] = useState(true);
    const User = useSelector((state) => state.userReducer);
    const [state, setstate] = useState({
        title: "",
        createdAt: "",
        students: "",
        image: "", 
        desc: "",
        author: [],
        source: [],
        price: 0,
        rating: 0,
        totalRates: 0,
        status: STATUS.NEW,
        _id: ''
    });

    useEffect(() => {
        getCourseDetailService(path)
            .then(res => {
                let status;
                if (res.data.source) status = STATUS.APPROVE;
                else if (User.registeredCourses.find(c => c.courseId === res.data._id)) status = STATUS.REGISTER;
                else status = STATUS.NEW;

                const newState = {
                    ...res.data,
                    rating: res.data.rating || 0,
                    totalRates: res.data.totalRates || 0,
                    price: res.data.price || 0,
                    status,
                    createdAt: new Date(res.data.createdAt).toDateString()
                }

                setstate(newState);
            })
            .catch(err => { })
            .finally(() => setIsLoadingEntryPape(false))
    }, [path, User.registeredCourses])

    const { title, createdAt, students, image, desc, author, rating, totalRates } = state;

    const register = () => {
        if (!User._id) return history.push("/login");

        setIsLoading(true);
        const data = {
            userId: User._id,
            courseId: state._id
        }

        const afterDispatch = () => {
            setIsLoading(false)
            setstate({
                ...state,
                status: STATUS.REGISTER
            });
        }

        const afterCallAPIFailed = (err) => {
            setIsLoading(false)
            message.error({
                content: err?.response?.data?.message || "Register unsuccessfully",
                icon: <i className="fa fa-exclamation-circle pr-2 text-danger" aria-hidden="true"></i>
            });
        }
        dispatch(registerCourseAction(data, afterDispatch, afterCallAPIFailed));
    }

    const unRegister = () => {
        setIsLoading(true);
        const reg = User.registeredCourses.find(c => c.courseId === state._id);
        if (!reg) return setIsLoading(false);

        dispatch(unRegisterCourseAction(reg._id,
            () => {
                setIsLoading(false);
                setstate({
                    ...state,
                    status: STATUS.NEW
                });
            },
            () => {
                setIsLoading(false)
                message.error({
                    content: "Unregister failed",
                    icon: <i className="fa fa-exclamation-circle pr-2 text-danger" aria-hidden="true"></i>
                });
            }
        ));
    }

    const cardImg = (
        <>
            {state.status === STATUS.APPROVE &&
                <div className="courseDetail_header_card_playBg">
                    <PlayCircleOutlined onClick={() => history.push(`/playlist/${path}`)}/>
                </div>}
            <img alt={image} src={image} />
        </>
    );

    return (
        <div className="courseDetail">
            {
                isLoadingEntryPape ?
                    <Loading />
                    :
                    <>
                        <div className="courseDetail_header">
                            <div className="container">
                                <div className="row">
                                    <div className="courseDetail_header_detail col-lg-8 col-md-8 col-sm-12">
                                        <h2>{title}</h2>
                                        <h5>
                                            <Rate allowHalf defaultValue={rating} disabled value={rating} />
                                            <span className="pl-3">{rating}/{totalRates}</span>
                                        </h5>
                                        <p>Author: {author.join(', ')}</p>
                                        <p>Created on: {createdAt}</p>
                                        <p>{students.length} students</p>
                                    </div>
                                    <div className="courseDetail_header_card col-lg-4 col-md-4 col-sm-12">
                                        <Card
                                            cover={cardImg}
                                        >
                                            {/* <h3>${price}</h3> */}
                                            <Button type="primary w-100 mb-3" danger
                                                size={"large"}
                                                onClick={register}
                                                loading={isLoading}
                                                hidden={state.status !== STATUS.NEW}
                                            >
                                                Register
                                            </Button>
                                            <Popconfirm placement="bottom" title={"Are you sure to unregister this course?"} onConfirm={unRegister} okText="Yes" cancelText="No">
                                                <Button type="primary w-100 mb-3"
                                                    size={"large"}
                                                    loading={isLoading}
                                                    hidden={state.status !== STATUS.REGISTER}
                                                >
                                                    Unregister
                                                </Button>
                                            </Popconfirm>
                                            <h6>How do you feel?</h6>
                                            <Rate allowHalf defaultValue={0} />
                                        </Card>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="courseDetail_content">
                            <div className="container">
                                <div className="courseDetail_content_wrapper">
                                    <div className="description col-lg-8 col-md-8 col-sm-12 my-5">
                                        <h2>Description</h2>
                                        <div dangerouslySetInnerHTML={{ __html: desc }}></div>
                                    </div>
                                    {/* <div className="studentComment col-lg-8 col-md-8 col-sm-12 mt-5">
                                        <CommentList />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}


