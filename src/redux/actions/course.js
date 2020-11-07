import { CHANGE_TRENDING_COURSES_PAGE, GET_COURSE_DETAIL, GET_COURSES } from '../../constant/actionType';
export const changeTrendingCoursesAction = (payload) => { 
    return { 
        type: CHANGE_TRENDING_COURSES_PAGE,
        payload: payload,
    }
}
export const getCourseDetail = (payload) => { 
    return { 
        type: GET_COURSE_DETAIL,
        payload: payload,
    }
}
export const getCourseInfo = (payload) => { 
    return { 
        type: GET_COURSES,
        payload: payload,
    }
}