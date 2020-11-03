import { POST_COURSES_IN_CATEGORY } from "../../constant/actionType";

const initiaState = false;

const coursesInCategoryReducer = ( state = initiaState, action ) => {
    switch (action.type) {
        case POST_COURSES_IN_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}

export default coursesInCategoryReducer;