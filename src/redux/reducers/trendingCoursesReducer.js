import { CHANGE_TRENDING_COURSES_PAGE, GET_COURSE_DETAIL, GET_COURSES } from "../../constant/actionType";

const initiaState = false;

const trendingCoursesReducer = ( state = initiaState, action ) => {
    switch (action.type) {
        case CHANGE_TRENDING_COURSES_PAGE:
            return action.payload;
        case GET_COURSE_DETAIL:
            return action.payload;
        case GET_COURSES:
            return action.payload;
        default:
            return state;
    }
}

export default trendingCoursesReducer;