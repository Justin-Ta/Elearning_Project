import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {getCourseDetail} from '../../redux/actions/course';
import {getDetail} from '../../constant/api';
import { Card, Button } from 'antd';
import { Rate } from 'antd';
import CommentList from '../../Components/CommentList';

export default function CourseDetail(props) {
    const id= props.match.params.id;
    const state = useSelector(state => state.trendingCourses);
    const dispatch= useDispatch();
    useEffect(() => {
        axios.get(getDetail(id))
            .then(res => { dispatch(getCourseDetail(res.data))})
            .catch(err => console.log(err));
    },[dispatch, id])
    console.log("state", state);
    const {tenKhoaHoc, ngayTao, luotXem, hinhAnh, moTa}= state;

    return (
        <div className="courseDetail">
            <div className="courseDetail_header">
                <div className="container">
                    <div className="row">
                        <div className="col-8 my-5">
                            <h2>{tenKhoaHoc}</h2>
                            <h5>
                                <Rate allowHalf defaultValue={3.4} disabled value={"3.4"}/>
                                <span className="pl-3">3.4</span>
                            </h5>
                            <h5>Created by: {ngayTao}</h5>
                            <h5>{luotXem} students</h5>
                        </div>
                        <div className="col-4 my-5">
                            <Card
                                style={{ width: "100%", textAlign: "center" }}
                                cover={<img alt={hinhAnh} src={hinhAnh} style={{background: "grey"}} />}
                            >
                                <h3>$132.344</h3>
                                <Button type="primary w-100 mb-3" danger size={"large"}>
                                    Register
                                </Button>
                                <h6>How do you feel?</h6>
                                <Rate allowHalf defaultValue={0} />
                            </Card>
                        </div>
                    </div>
                </div>

            </div> 
        
            <div className="courseDetail__content mt-5">
                <div className="container">
                    <div className="description col-8">
                        <h2>Description</h2>
                        {moTa}
                    </div>
                    <div className="studentComment">
                        <CommentList />
                    </div>
                </div>
            </div>
        </div>
    )
}


