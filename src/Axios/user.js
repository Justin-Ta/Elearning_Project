import axios from 'axios';
import { getUserUrl, logInUrl, signUpUrl, updateUserUrl } from '../constant/api';
import { TOKEN } from '../constant/common';

export const signUpService = (userInfo) => {
    return axios.post(signUpUrl, userInfo);
}

export const logInService = (data) => {
    return axios.post(logInUrl, data);
}

export const updateUserService = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.put(updateUserUrl, data, {headers});
}

export const getUserService = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    return axios.post(getUserUrl, "", {headers});
}