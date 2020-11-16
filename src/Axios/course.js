import axios from 'axios';
import { 
    getTrendingCoursesByPageUrl,
    getCategoryCoursesByPageUrl,
} from '../constant/api';

export const getTrendingCoursesService = (currentPage) => {
    return axios.get(getTrendingCoursesByPageUrl(currentPage));
}

export const getCategoryCoursesService = (currentPage, category) => {
    return axios.get(getCategoryCoursesByPageUrl(currentPage, category));
}