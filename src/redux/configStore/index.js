import { combineReducers } from 'redux';
import trendingCoursesReducer from '../reducers/trendingCoursesReducer';


const configStore = combineReducers({
    trendingCourses : trendingCoursesReducer,
});

export default configStore;