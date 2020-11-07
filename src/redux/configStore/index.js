import { combineReducers } from 'redux';
import trendingCoursesReducer from '../reducers/trendingCoursesReducer';
import userReducer from '../reducers/userReducer'

const configStore = combineReducers({
    trendingCourses : trendingCoursesReducer,
    userReducer
});

export default configStore;