import { POST_TRENDING_COURSES } from "../../constant/actionType";

const initiaState = false;

const trendingCoursesReducer = ( state = initiaState, action ) => {
    switch (action.type) {
        case POST_TRENDING_COURSES:
            return action.payload;
        default:
            return state;
    }
}

export default trendingCoursesReducer;