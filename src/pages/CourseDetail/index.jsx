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
                </div>
            </div>
            <div className="courseDetail__content mt-5">
                <div className="container">
                    <h2>Description</h2>
                    {moTa}
                </div>
            </div>
        </div>
    )
}



