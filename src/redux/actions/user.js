import {GET_USER_LIST} from '../../constant/actionType';
import axios from 'axios';
import { logInUrl, TOKEN, USER_LOGIN } from '../../constant/api'
export const getListOfUser=(payload)=>{
    return{
    type: GET_USER_LIST,
    payload: payload,
    }
}

export const LogIn=(userLogin, history)=>{
    return async dispatch => {
        try {
            let { data, status } = await axios({
                url: logInUrl,
                method: 'POST',
                data: {
                    taiKhoan: userLogin.userName,
                    matKhau: userLogin.passWord
                }
            });
            console.log(data)
            if (status === 200) {
                //Sau khi gọi api => dispatch lên redux 
                dispatch({
                    type: 'DANG_NHAP',
                    userLogin: data
                });
                //Lưu vào localstorage
                localStorage.setItem(USER_LOGIN, JSON.stringify(data));
                localStorage.setItem(TOKEN, data.accessToken);
                // history.push("/")
                history.goBack();
            }
        } catch (err) {
            console.log(err.response.data);
        }

    }
}