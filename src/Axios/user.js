import axios from 'axios';
import { logInUrl, signUpUrl, deleteUserAPI, searchUserAPI, getListUserAPI} from '../constant/api';

export const signUpService = (userInfo) => {
    return axios.post(signUpUrl, userInfo);
}

export const logInService = (data) => {
    return axios.post(logInUrl, data);
}
export const getListUserService=()=>{
  return axios.get(getListUserAPI)
}
export const deleteUserService=(UserName)=>{
    return axios.delete(deleteUserAPI(UserName), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
}

export const searchUserService= (keyWord)=>{
    return axios.get(searchUserAPI(keyWord),{
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
      
}