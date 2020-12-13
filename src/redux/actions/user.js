import { GET_USER_LIST, POST_USERINFO, SEARCH_USER } from '../../constant/actionType';
import { signUpService, deleteUserService, getListUserService, searchUserService } from '../../Axios/user';
import { message } from 'antd';
import { TOKEN, USERINFO } from '../../constant/common';


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