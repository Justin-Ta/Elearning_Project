import { CHANGE_TRENDING_COURSES_PAGE } from "../../constant/actionType";

const initiaState = false;

const trendingCoursesReducer = ( state = initiaState, action ) => {
    switch (action.type) {
        case CHANGE_TRENDING_COURSES_PAGE:
            return action.payload;
        default:
            return state;
    }
}

export default trendingCoursesReducer;