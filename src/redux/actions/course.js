import {  GET_COURSES, POST_COURSE_DETAIL, POST_PENDING_COURSES, POST_REGISTERED_COURSES, REMOVE_PENDING_COURSE, UPDATE_PENDING_COURSES } from '../../constant/actionType';
import { 
    getTrendingCoursesService,
    getCategoryCoursesService,
    getCourseDetailService,
    getPendingCourseService,
    registerCourseService,
    unRegisterCourseService,
    deleteCourseService,
} from '../../Axios/course';
import { 
    POST_TRENDING_COURSES,
    POST_COURSES_IN_CATEGORY,
} from '../../constant/actionType';

import { message } from 'antd';

export const getCourseInfo = (payload) => { 
    return { 
        type: GET_COURSES,
        payload: payload,
    }
}

export const changeTrendingCoursesAction = (currentPage) => { 
    return dispatch => {
        getTrendingCoursesService(currentPage)
        .then( res => {
            dispatch({
                type: POST_TRENDING_COURSES,
                payload: res.data
            });
        })
        .catch( err => console.log(err) );
    }
}

export const getCategoryCoursesAction = (category, currentPage, afterCallAPISuccess) => { 
    return dispatch => {
        getCategoryCoursesService(category, currentPage)
        .then( res => {
            dispatch({
                type: POST_COURSES_IN_CATEGORY,
                payload: res.data
            });
            afterCallAPISuccess();
        })
        .catch( err => console.log(err) );
    }
}

export const getCourseDetailAction = (id, afterCallAPISuccess) => {
    return dispatch => {
        getCourseDetailService(id)
        .then( res => {
            dispatch({ 
                type: POST_COURSE_DETAIL,
                payload: res.data,
            });
            afterCallAPISuccess();
        })
        .catch(err => console.log(err));
    }
}

export const getPendingCoursesAction = (data) => {
    return dispatch => {
        getPendingCourseService(data)
        .then( res => {
            dispatch({ 
                type: POST_PENDING_COURSES,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
    }
}

export const registerCourseAction = (data, afterDispatch, afterCallAPIFailed) => {
    return dispatch => {
        registerCourseService(data)
        .then( res => {
            dispatch({
                type: UPDATE_PENDING_COURSES,
                payload: res.data,
            });
            afterDispatch();
        })
        .catch(err => {
            afterCallAPIFailed(err);
            console.log(err);
        });
    }
}

export const unRegisterCourseAction = (id, afterDispatch, afterCallAPIFailed) => {
    return dispatch => {
        unRegisterCourseService(id)
        .then( res => {
            dispatch({
                type: REMOVE_PENDING_COURSE,
                payload: id,
            });
            afterDispatch();
        })
        .catch(err => {
            afterCallAPIFailed();
            console.log(err);
        });
    }
}

export const DeleteCourseAction=(CourseName, afterCallAPISuccess)=>{
    deleteCourseService(CourseName)
    .then(res=>{
        message.success(`Delete ${CourseName} success!!!`);
        afterCallAPISuccess();
    })
    .catch(err=>{
        err.response && console.log(err.response.data);
        message.error('Delete Error!!!');
    })
}
