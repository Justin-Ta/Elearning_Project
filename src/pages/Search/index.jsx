import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getCoursesService } from '../../Axios/course';
import CourseList2 from '../../Components/CourseList2';
import Loading from '../../Components/Loading';

function nonAccentVietnamese(str) {
    str = str.toLowerCase();
    //     We can also use this instead of from line 11 to line 17
    //     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
    //     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
    //     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
    //     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
    //     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
    //     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
    //     str = str.replace(/\u0111/g, "d");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}

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
