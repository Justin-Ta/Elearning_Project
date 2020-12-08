import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {getCourseDetailAction} from '../../../redux/actions/course';
import {getDetail} from '../../../constant/api';

export default function CourseDetailForAdmin(props) {
    const id= props.match.params.id;
    const state = useSelector(state => state.trendingCourses);
    const dispatch= useDispatch();
    useEffect(() => {
        axios.get(getDetail(id))
            .then(res => { dispatch(getCourseDetailAction(res.data))})
            .catch(err => console.log(err));
    },[dispatch, id])
    console.log("Du lieu",state);
    const {tenKhoaHoc, ngayTao, luotXem}= state;

    return (
        <div>
            id: {id}
            <h1>{tenKhoaHoc}</h1>
            <p>Create date: <span>{ngayTao}</span></p>
            <p>Views: <span>{luotXem}</span></p>
        </div>
    )
}



