import {GET_USER_LIST} from "../../constant/actionType";
import {USER_LOGIN} from '../../constant/api'

let userLocal ={};
if (localStorage.getItem(USER_LOGIN)){
    userLocal=JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: userLocal
}

const userReducer = ( state = initialState, action ) => {
    switch (action.type){
        case GET_USER_LIST:
            return action.payload;
        default:
        return state; 
    }
}

export default userReducer;