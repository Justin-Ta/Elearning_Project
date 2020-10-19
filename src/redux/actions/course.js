import { CHANGE_TRENDING_COURSES_PAGE } from '../../constant/actionType';

export const changeTrendingCoursesAction = (payload) => { 
    return { 
        type: CHANGE_TRENDING_COURSES_PAGE,
        payload: payload,
    }
}
