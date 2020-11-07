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
    console.log(state);
    return (
        <div className="courseDetail">
            <div className="courseDetail_header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 my-5">
                            <h1>{state.tenKhoaHoc}</h1>
                            <p>Create date: <span>{state.ngayTao}</span></p>
                            <p>Rating: <RatingStars score={4.5}/></p>
                            <p>Views: <span>{state.luotXem}</span></p>
                            <button className="btn btn-success">Register</button>
                        </div>
                        <div className="col-md-4 my-5 d-md-block d-none">
                            <img src={state.hinhAnh} alt="" className="courseImg img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="courseDetail__content mt-5">
                <div className="container">
                    <h2>Description</h2>
                    {state.moTa}
                </div>
            </div>
        </div>
    )
}



