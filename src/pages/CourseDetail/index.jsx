import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseDetailAction, registerCourseAction } from '../../redux/actions/course';
import { Card, Button, message, Rate } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import CommentList from '../../Components/CommentList';
import { useState } from 'react';
import Loading from '../../Components/Loading';

export default function CourseDetail(props) {
    const id = props.match.params.id;
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourseDetailAction(id));
    }, [dispatch, id])
    const state = useSelector(state => {
        return {
           courseDetail: state.courseDetailReducer,
           choXetDuyet: state.userReducer.KhoaHocChoXetDuyet && state.userReducer.KhoaHocChoXetDuyet.findIndex( ele => {
               return ele.maKhoaHoc === state.courseDetailReducer.maKhoaHoc;
           }),
           daXetDuyet: state.userReducer.KhoaHocDaXetDuyet && state.userReducer.KhoaHocDaXetDuyet.findIndex( ele => {
            return ele.maKhoaHoc === state.courseDetailReducer.maKhoaHoc;
        }),
           taiKhoan: state.userReducer.taiKhoan,
        }
    });
    //console.log("state.choXetDuyet", state);
    const { tenKhoaHoc, ngayTao, luotXem, hinhAnh, moTa, nguoiTao, maKhoaHoc } = state.courseDetail;
    if (!tenKhoaHoc || state.choXetDuyet === undefined || state.daXetDuyet === undefined) return <Loading/>;

    const register = () => {
        setIsLoading(true);
        const data = {
            maKhoaHoc: maKhoaHoc,
            taiKhoan: state.taiKhoan,
        }
        const course = {
            maKhoaHoc,
            tenKhoaHoc
        }

        const afterDispatch = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }

        const afterCallAPIFailed = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
            message.error({
                content: "Register unsuccessfully",
                icon: <i className="fa fa-exclamation-circle pr-2 text-danger" aria-hidden="true"></i>
              });
        }

        dispatch(registerCourseAction(data, course,afterDispatch, afterCallAPIFailed));
    }

    const cardImg = (
        <>
            {state.daXetDuyet >= 0 && 
            <div className="courseDetail_header_card_playBg">
                <PlayCircleOutlined />
            </div>}
            <img alt={hinhAnh} src={hinhAnh}/>
        </>                                
    );

    return (
        <div className="courseDetail">
            <div className="courseDetail_header">
                <div className="container">
                    <div className="row">
                        <div className="courseDetail_header_detail col-lg-8 col-md-8 col-sm-12">
                            <h2>{tenKhoaHoc}</h2>
                            <h5>
                                <Rate allowHalf defaultValue={3.4} disabled value={"3.4"} />
                                <span className="pl-3">3.4</span>
                            </h5>
                            <p>Author: {nguoiTao.hoTen}</p>
                            <p>Created by: {ngayTao}</p>
                            <p>{luotXem} students</p>
                        </div>
                        <div className="courseDetail_header_card col-lg-4 col-md-4 col-sm-12">
                            <Card
                                cover={cardImg}
                            >
                                <h3>$132.344</h3>
                                <Button type="primary w-100 mb-3" danger 
                                size={"large"} 
                                disabled={state.choXetDuyet >= 0}
                                onClick={register}
                                loading={isLoading}
                                hidden={state.daXetDuyet >= 0}
                                >
                                    {(state.choXetDuyet >= 0) ? 'Registered': 'Register'}
                                </Button>
                                <h6>How do you feel?</h6>
                                <Rate allowHalf defaultValue={0} />
                            </Card>
                        </div>
                    </div>
                </div>

            </div>

            <div className="courseDetail__content">
                <div className="container">
                    <div className="description col-lg-8 col-md-8 col-sm-12 mt-5">
                        <h2>Description</h2>
                        {moTa}
                    </div>
                    <div className="studentComment col-lg-8 col-md-8 col-sm-12 mt-5">
                        <CommentList />
                    </div>
                </div>
            </div>
        </div>
    )
}


