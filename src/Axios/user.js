import axios from 'axios';
import { logInUrl, signUpUrl } from '../constant/api';

export const signUpService = (userInfo) => {
    return axios.post(signUpUrl, userInfo);
}

export const logInService = (data) => {
    return axios.post(logInUrl, data);
}

// export const getTokenService = (token) => {
//     return axios.get(getTokenUrl);
// }