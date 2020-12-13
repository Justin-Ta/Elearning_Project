import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getCoursesService } from '../../Axios/course';
import CourseList2 from '../../Components/CourseList2';
import Loading from '../../Components/Loading';
import { nonAccentVietnamese } from '../../share/functions';

export default function Search() {
    const history = useHistory()
    let { key } = useParams();    
    const [state, setstate] = useState({
        isLoading: true,
        result: [],
    })
    useEffect(() => {
        if (key === undefined) return history.push("/*");
        const keyword = nonAccentVietnamese(key);
        getCoursesService()
        .then(res => {
            let courses = res.data;
            const result = [];
            courses.forEach(course => {
                if (nonAccentVietnamese(course.tenKhoaHoc).includes(keyword)) result.push(course);
            });
            setstate({
                isLoading: false,
                result: result,
            });
        })
        .catch(err => {
            console.log(err);
        })
    }, [key, history])
    //console.log('result', state.result);
    return (
        <div className="search mt-5 mb-5">
            <div className="container">
                {state.isLoading ?
                    <Loading />
                    :
                    <>
                        <h2>{state.result.length} results for "{key}"</h2>
                        <div style={{ backgroundColor: 'transparent' }} className="d-flex ">
                            <div className="col-12">
                                <CourseList2 courses={state.result} />
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
