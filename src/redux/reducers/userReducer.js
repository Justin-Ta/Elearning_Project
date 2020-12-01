import {POST_USERINFO, GET_USER_LIST} from "../../constant/actionType";

const initialState = {
    token: false,
    userInfo: false,
};

const userReducer = ( state = initialState, action ) => {
    switch (action.type){
        case POST_USERINFO:
            return action.payload;
        case GET_USER_LIST:
            return action.payload;
        default:
        return state;
    }
}

export default userReducer;