import { GET_COURSE_DETAIL, GET_COURSES } from '../../constant/actionType';
import { 
    getTrendingCoursesService,
    getCategoryCoursesService, 
} from '../../Axios/course';
import { 
    POST_TRENDING_COURSES,
    POST_COURSES_IN_CATEGORY,
} from '../../constant/actionType';

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



