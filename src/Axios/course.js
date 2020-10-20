import axios from 'axios';
import { getTrendingCoursesByPageUrl } from '../constant/api';

export const getTrendingCoursesService = (currentPage) => {
    return axios.get(getTrendingCoursesByPageUrl(currentPage))
}