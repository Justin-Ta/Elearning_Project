import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {getCourseDetail} from '../../../redux/actions/course';
import {getDetail} from '../../../constant/api';

export default function CourseDetailForAdmin(props) {
    const id= props.match.params.id;
    const state = useSelector(state => state.trendingCourses);
    const dispatch= useDispatch();
    useEffect(() => {
        axios.get(getDetail(id))
            .then(res => { dispatch(getCourseDetail(res.data))})
            .catch(err => console.log(err));
    },[dispatch])
    console.log(id);
    return (
        <div>
            <h1>{state.tenKhoaHoc}</h1>
                            <p>Create date: <span>{state.ngayTao}</span></p>
                            <p>Views: <span>{state.luotXem}</span></p>
                            <button className="btn btn-success">Register</button>
        </div>
    )
}



