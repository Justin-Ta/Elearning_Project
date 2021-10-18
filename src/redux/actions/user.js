import { DELETE_USERINFO, GET_USER_LIST, POST_USERINFO, UPDATE_USERINFO, SEARCH_USER } from '../../constant/actionType';
import { getUserService, logInService, signUpService, updateUserService, deleteUserService, getListUserService, searchUserService } from '../../Axios/user';
import { message } from 'antd';



export const getListUserAction=()=>{
    return dispatch => {getListUserService()
        .then(res=>{
            dispatch(
                {
                    type: GET_USER_LIST,
                    payload: res.data,
                }
            )
        }
            )
        .catch(err=>{
            console.log(err)
        } 
            )}  
}

export const logInAction = (data, afterCallAPISuccess, afterCallAPIFailed) => {
    logInService(data)
        .then(res => {
            afterCallAPISuccess(res.data);
        })
        .catch(err => {
            console.log(err);
            afterCallAPIFailed();
        }) 
}

export const signUpAction = (userInfo, aftercallAPISuccess, afterCallAPIFailed) => {
    signUpService(userInfo)
        .then(res => {
            aftercallAPISuccess();
            return;
        })
        .catch(err => {
            afterCallAPIFailed(err);
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

export const updateUserInfoAction = (userInfo, afterDipatch, afterCallAPIFailed) => {
    return dispatch => {
        updateUserService(userInfo)
        .then(res => {
            //console.log(res.data);
            dispatch({
                type: UPDATE_USERINFO,
                payload: res.data,
            })
            afterDipatch();
        })
        .catch(err => {
            console.log(err);
            afterCallAPIFailed(err);
        });
    }
}

export const deleteInfoAction = () => {
    const data = {
        taiKhoan: undefined,
        matKhau: undefined,
        hoTen: undefined,
        soDT: undefined,
        maLoaiNguoiDung: undefined,
        maNhom: undefined,
        email: undefined,
        KhoaHocChoXetDuyet:[],
        KhoaHocDaXetDuyet:[],
    }
    return {
        type: DELETE_USERINFO,
        payload: data
    }
}

export const DeleteUserAction=(UserName)=>{
    deleteUserService(UserName)
    .then(res=>{
        message.success(`Delete ${UserName} success!!!`);
    }
        )
    .catch(err=>{
        message.error('Delete Error!!!');
    } 
        )
}

export const searchUserAction=(keyWord)=>{
    return dispatch => {searchUserService(keyWord)
        .then(res=>{
            dispatch(
                {
                    type: SEARCH_USER,
                    payload: res.data,
                }
            )
        }
            )
        .catch(err=>{
            console.log(err)
        } 
            )}
    
}