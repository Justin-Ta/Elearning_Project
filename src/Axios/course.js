import axios from 'axios';
import { 
    getTrendingCoursesByPageUrl,
    getCategoryCoursesByPageUrl,
    getDetail,
    getPendingCourseUrl,
    registerCourseUrl,
    unRegisterCourseUrl,
    getCourse,
    deleteCourseAPI,
    createCourseUrl,
    updateCourseUrl,
} from '../constant/api';
import { GV_TOKEN, TOKEN } from '../constant/common';

export const getTrendingCoursesService = (currentPage) => {
    return axios.get(getTrendingCoursesByPageUrl(currentPage));
}

export const getCategoryCoursesService = (category, currentPage) => {
    return axios.get(getCategoryCoursesByPageUrl(category, currentPage));
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

export const registerCourseService = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.post(registerCourseUrl, data, {headers});
}

export const unRegisterCourseService = (id) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.post(unRegisterCourseUrl(id), {headers});
}

export const deleteCourseService=(CourseName)=>{
    return axios.delete(deleteCourseAPI(CourseName), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
}

export const createCourseService = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.post(createCourseUrl, data, {headers});
}

export const updateCourseService = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.put(updateCourseUrl, data, {headers});
}