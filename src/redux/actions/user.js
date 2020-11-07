import {GET_USER_LIST} from '../../constant/actionType';
export const getListOfUser=(payload)=>{
    return{
    type: GET_USER_LIST,
    payload: payload,
    }
}