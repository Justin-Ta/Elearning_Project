import axios from 'axios';
import { getUserUrl, logInUrl, signUpUrl, updateUserUrl, deleteUserAPI, searchUserAPI, getListUser, updateUserAvatarUrl } from '../constant/api';
import { TOKEN, USERID } from '../constant/common';

export const signUpService = (userInfo) => {
    return axios.post(signUpUrl, userInfo);
}

export const logInService = (data) => {
    return axios.post(logInUrl, data);
}
export const getListUserService=()=>{
  return axios.get(getListUser)
}
export const deleteUserService=(UserName)=>{
    return axios.delete(deleteUserAPI(UserName), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
}

export const updateUserService = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    const uid = localStorage.getItem(USERID);
    return axios.put(updateUserUrl(uid), data, {headers});
}

export const getUserService = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }

    const uid = localStorage.getItem(USERID);
    return axios({ method: 'get', url: getUserUrl(uid), headers });
  }

export const searchUserService= (keyWord)=>{
    return axios.get(searchUserAPI(keyWord),{
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem(TOKEN)
        }
      })
}

export const updateAvatarService = (data) => {
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
    }
    const uid = localStorage.getItem(USERID);
    return axios.post(updateUserAvatarUrl(uid), data, {headers});
}