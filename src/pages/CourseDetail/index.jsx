import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {getCourseDetail} from '../../redux/actions/course';
import RatingStars from '../../Components/ratingStars';
import {getDetail} from '../../constant/api';

export default function CourseDetail(props) {
    const id= props.match.params.id;
    const state = useSelector(state => state.trendingCourses);
    const dispatch= useDispatch();
    useEffect(() => {
        axios.get(getDetail(id))
            .then(res => { dispatch(getCourseDetail(res.data))})
            .catch(err => console.log(err));
    },[dispatch])
    console.log(state)
    console.log(props)
    const {tenKhoaHoc, ngayTao, luotXem, hinhAnh, moTa}= state;
    return (
        <div className="courseDetail">
            <div className="courseDetail_header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 my-5">
                            <h1>{tenKhoaHoc}</h1>
                            <p>Create date: <span>{ngayTao}</span></p>
                            <p>Rating: <RatingStars score={4.5}/></p>
                            <p>Views: <span>{luotXem}</span></p>
                            <button className="btn btn-success">Register</button>
                        </div>
                        <div className="col-md-4 my-5 d-md-block d-none">
                            <img src={hinhAnh} alt="" className="courseImg img-fluid"/>
                        </div>
                    </div>
                    <div className="courseDetail__content mt-5">
                        <div className="container">
                            <h2>Description</h2>
                            {moTa}
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
{/* import React from 'react';
import { Card, Button } from 'antd';
import { Rate } from 'antd';
import CommentList from '../../Components/CommentList';

export default function CourseDetail() {
        return (
            <div className="courseDetail">
                <div className="courseDetail_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 my-5">
                                <h2>Front End Developer</h2>
                                <h5>
                                    <Rate allowHalf defaultValue={3.4} disabled value={"3.4"}/>
                                    <span className="pl-3">3.4</span>
                                </h5>
                                <h4>Created by: ddddcd dsc</h4>
                            </div>
                            <div className="col-4 my-5">
                                <Card
                                    style={{ width: "100%", textAlign: "center" }}
                                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
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

                </div> */}
            
    
                {/* <div className="courseDetail__content mt-5">
                    <div className="container">
                        <div className="description col-8">
                            <h2>Description</h2>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, officiis incidunt hic soluta beatae voluptatum quidem odit vel natus libero doloremque quae, veniam numquam. Pariatur repudiandae, consectetur reprehenderit quae, corrupti, consequatur fuga repellat possimus explicabo quisquam asperiores expedita nobis nihil nostrum quis dolorem hic incidunt. Iste nam neque blanditiis aliquam!
                        </div>
                        <div className="studentComment">
                            <CommentList />
                        </div>
                    </div>
                </div>
            </div>
        ) */}

