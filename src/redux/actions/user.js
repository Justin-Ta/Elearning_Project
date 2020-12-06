import { GET_USER_LIST, POST_USERINFO, UPDATE_USERINFO } from '../../constant/actionType';
import { getUserService, logInService, signUpService, updateUserService } from '../../Axios/user';
import { message } from 'antd';

export const getListOfUser = (payload) => {
    return {
        type: GET_USER_LIST,
        payload: payload,
    }
}

export const logInAction = (data, afterCallAPISuccess, afterCallAPIFailed) => {
    logInService(data)
        .then(res => {
            const { accessToken } = res.data;
            afterCallAPISuccess(accessToken);
        })
        .catch(err => {
            console.log(err);
            afterCallAPIFailed();
        }) 
}

export const signUpAction = (userInfo, signUpForm, setLoading) => {
    signUpService(userInfo)
        .then(res => {
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

export const postUserInfoAction = () => {
    return dispatch => {
        getUserService()
            .then(res => {
                dispatch({
                    type: POST_USERINFO,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const updateUserInfoAction = (userInfo) => {
    return dispatch => {
        updateUserService(userInfo)
        .then(res => {
            //console.log(res.data);
            dispatch({
                type: UPDATE_USERINFO,
                payload: res.data,
            })
            message.success('Update successfully');
        })
        .catch(err => {
            console.log(err);
            message.error( String(err) );
        });
    }
}

export const deleteInfoAction = () => {
    const data = {
        chiTietKhoaHocGhiDanh: [],
        taiKhoan: undefined,
        matKhau: undefined,
        hoTen: undefined,
        soDT: undefined,
        maLoaiNguoiDung: undefined,
        maNhom: undefined,
        email: undefined,
    }
    return {
        type: POST_USERINFO,
        payload: data
    }
}