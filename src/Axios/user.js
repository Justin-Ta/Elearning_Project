import axios from 'axios';
import { logInUrl, signUpUrl, deleteUserAPI, searchUserAPI} from '../constant/api';

export const signUpService = (userInfo) => {
    return axios.post(signUpUrl, userInfo);
}

export const logInService = (data) => {
    return axios.post(logInUrl, data);
}

export const deleteUserService=(UserName)=>{
    return axios.delete(deleteUserAPI(UserName));
}

export const searchUserService= (keyWord)=>{
    return axios.get(searchUserAPI(keyWord))
}