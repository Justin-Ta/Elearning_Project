import { combineReducers } from 'redux';
import courseDetailReducer from '../reducers/courseDetailReducer';
import coursesInCategoryReducer from '../reducers/coursesInCategoryReducer';
import trendingCoursesReducer from '../reducers/trendingCoursesReducer';
import userReducer from '../reducers/userReducer'
import userManagementReducer from '../reducers/userManagementReducer';
import courseManagementReducer from '../reducers/courseManagementReducer';

const configStore = combineReducers({
    trendingCourses : trendingCoursesReducer,
    userReducer : userReducer,
    coursesInCategory : coursesInCategoryReducer,
    courseDetailReducer : courseDetailReducer,
    userManagementReducer: userManagementReducer,
    courseManagementReducer: courseManagementReducer,
});

export default configStore;