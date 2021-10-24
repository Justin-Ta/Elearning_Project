import { POST_USERINFO, UPDATE_USERINFO, POST_PENDING_COURSES, POST_REGISTERED_COURSES, UPDATE_PENDING_COURSES, DELETE_USERINFO, REMOVE_PENDING_COURSE, GET_USER_LIST, SEARCH_USER, UPDATE_AVATAR } from "../../constant/actionType";

const initialState = {
    _id: undefined,
    firstname: undefined,
    lastname: undefined,
    avatar: undefined,
    phone: undefined,
    role: undefined,
    email: undefined,
    registeredCourses: [],
    courses: [],
};

const userReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case POST_USERINFO:
            Object.keys(state).forEach(key => {
                if (action.payload[key]) return newState[key] = action.payload[key];
            })
            return newState;
        case DELETE_USERINFO:
            return initialState;
        case UPDATE_USERINFO:
            ['firstname', 'lastname', 'phone'].forEach(key => {
                if (action.payload[key]) return newState[key] = action.payload[key];
            });
            return newState;
        case POST_PENDING_COURSES:
            newState.registeredCourses = action.payload || [];
            return newState;
        case POST_REGISTERED_COURSES:
            newState.courses = action.payload;
            return newState;
        case UPDATE_PENDING_COURSES:
            newState.registeredCourses.push(action.payload);
            return newState;
        case REMOVE_PENDING_COURSE:
            const index = newState.registeredCourses.findIndex((course) => {
                return course._id === action.payload;
            });
            newState.registeredCourses.splice(index, 1);
            return newState;
        case GET_USER_LIST:
            return action.payload;
        case SEARCH_USER:
            return action.payload;
        case UPDATE_AVATAR:
            newState.avatar = action.payload;
            return newState;
        default:
            return state;
    }
}

export default userReducer;