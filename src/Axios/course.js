import axios from 'axios';
import { 
    getTrendingCoursesByPageUrl,
    getCategoryCoursesByPageUrl,
    deleteCourseAPI
} from '../constant/api';

export const getTrendingCoursesService = (currentPage) => {
    return axios.get(getTrendingCoursesByPageUrl(currentPage));
}

export const getCategoryCoursesService = (currentPage, category) => {
    return axios.get(getCategoryCoursesByPageUrl(currentPage, category));
}

export const deleteCourseService=(CourseName)=>{
    return axios.delete(deleteCourseAPI(CourseName), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
}