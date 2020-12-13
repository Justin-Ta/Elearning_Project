import axios from 'axios';
import { 
    getTrendingCoursesByPageUrl,
    getCategoryCoursesByPageUrl,
    getDetail,
    getPendingCourseUrl,
    getRegisteredCoursesUrl,
    registerCourseUrl,
    unRegisterCourseUrl,
    getCourse,
    deleteCourseAPI
} from '../constant/api';
import { GV_TOKEN, TOKEN } from '../constant/common';

export const getTrendingCoursesService = (currentPage) => {
    return axios.get(getTrendingCoursesByPageUrl(currentPage));
}

export const getCategoryCoursesService = (category) => {
    return axios.get(getCategoryCoursesByPageUrl(category));
}

export const getCourseDetailService = (CourseId) => {
    return axios.get(getDetail(CourseId));
}

export const getCoursesService = () => {
    return axios.get(getCourse);
}

export const getPendingCourseService = (username) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GV_TOKEN}`,
    }
    return axios.post(getPendingCourseUrl, username, {headers});
}

export const getRegisteredCoursesService = (username) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GV_TOKEN}`,
    }
    return axios.post(getRegisteredCoursesUrl, username, {headers});
}

export const registerCourseService = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.post(registerCourseUrl, data, {headers});
}

export const unRegisterCourseService = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.post(unRegisterCourseUrl, data, {headers});
}

export const deleteCourseService=(CourseName)=>{
    return axios.delete(deleteCourseAPI(CourseName), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
}