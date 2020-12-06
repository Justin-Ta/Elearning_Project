import { combineReducers } from 'redux';
import courseDetailReducer from '../reducers/courseDetailReducer';
import coursesInCategoryReducer from '../reducers/coursesInCategoryReducer';
import trendingCoursesReducer from '../reducers/trendingCoursesReducer';
import userReducer from '../reducers/userReducer'

const configStore = combineReducers({
    trendingCourses : trendingCoursesReducer,
    userReducer : userReducer,
    coursesInCategory : coursesInCategoryReducer,
    courseDetailReducer : courseDetailReducer,
});

export default configStore;