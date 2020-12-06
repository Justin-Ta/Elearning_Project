import { GET_COURSES, POST_COURSE_DETAIL, POST_PENDING_COURSES, POST_REGISTERED_COURSES, UPDATE_PENDING_COURSES } from '../../constant/actionType';
import { 
    getTrendingCoursesService,
    getCategoryCoursesService,
    getCourseDetailService,
    getPendingCourseService,
    getRegisteredCoursesService,
    registerCourseService, 
} from '../../Axios/course';
import { 
    POST_TRENDING_COURSES,
    POST_COURSES_IN_CATEGORY,
} from '../../constant/actionType';
//--------------------------------------

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

export const getCategoryCoursesAction = (currentPage, category) => { 
    return dispatch => {
        getCategoryCoursesService(currentPage, category)
        .then( res => {
            dispatch({
                type: POST_COURSES_IN_CATEGORY,
                payload: res.data
            });
        })
        .catch( err => console.log(err) );
    }
}

export const getCourseDetailAction = (id) => {
    return dispatch => {
        getCourseDetailService(id)
        .then( res => {
            dispatch({ 
                type: POST_COURSE_DETAIL,
                payload: res.data,
            });
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

export const getRegisteredCoursesAction = (data) => {
    return dispatch => {
        getRegisteredCoursesService(data)
        .then( res => {
            dispatch({ 
                type: POST_REGISTERED_COURSES,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
    }
}

export const registerCourseAction = (data, courseInfo, afterDispatch, afterCallAPIFailed) => {
    return dispatch => {
        registerCourseService(data)
        .then( res => {
            console.log('res.data', res.data);
            dispatch({
                type: UPDATE_PENDING_COURSES,
                payload: courseInfo,
            });
            afterDispatch();
        })
        .catch(err => {
            afterCallAPIFailed();
            console.log(err);
        });
    }
}



