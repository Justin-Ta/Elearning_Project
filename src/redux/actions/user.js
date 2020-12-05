import { GET_USER_LIST, POST_USERINFO, SEARCH_USER } from '../../constant/actionType';
import { signUpService } from '../../Axios/user';
import { message } from 'antd';
import { TOKEN, USERINFO } from '../../constant/common';

export const getListOfUser = (payload) => {
    return {
        type: GET_USER_LIST,
        payload: payload,
    }
}

export const sigUpAction = (userInfo, signUpForm, setLoading) => {
    signUpService(userInfo)
        .then(res => {
            console.log(res.status);
            setLoading(false);
            message.success('Sign up successfully');
            signUpForm.resetFields();
            return;
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
            message.error('Sign up unsuccessfully');
        });
}

export const postUserAction = () => {
    const accessToken = localStorage.getItem(TOKEN);
    const userInfo = JSON.parse(localStorage.getItem(USERINFO));
    return {
        type: POST_USERINFO,
        payload: {
            token: accessToken,
            userInfo: userInfo,
        }
    }
}

export const DeleteUserAction=()=>{
    
}

export const searchUserAction = (payload) => {
    return {
        type: SEARCH_USER,
        payload: payload,
    }
}