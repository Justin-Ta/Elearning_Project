import { combineReducers } from 'redux';
import coursesInCategoryReducer from '../reducers/coursesInCategoryReducer';
import trendingCoursesReducer from '../reducers/trendingCoursesReducer';


const configStore = combineReducers({
    trendingCourses : trendingCoursesReducer,
    coursesInCategory : coursesInCategoryReducer,
});

export default configStore;