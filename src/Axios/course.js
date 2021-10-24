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
    rejectRegistrationUrl,
    approveRegistrationUrl,
} from '../constant/api';
import { TOKEN } from '../constant/common';

export const getTrendingCoursesService = (currentPage) => {
    return axios.get(getTrendingCoursesByPageUrl(currentPage));
}

export const getCategoryCoursesService = (category, currentPage) => {
    return axios.get(getCategoryCoursesByPageUrl(category, currentPage));
}

export const getCourseDetailService = (CourseId) => {
    return axios.post(getDetail(CourseId), undefined, {
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
        }
    });
}

export const getCoursesService = () => {
    return axios.get(getCourse);
}

export const getPendingCourseService = (page) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.post(getPendingCourseUrl(page), "", {headers});
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

export const rejectRegistrationService = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.post( rejectRegistrationUrl, data, {headers});
}


export const approveRegistrationService = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.post( approveRegistrationUrl, data, {headers});
}

export const deleteCourseService=(data)=>{
    console.log(data)
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }

    return axios({
        method: 'DELETE',
        url: deleteCourseAPI,
        data,
        headers
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