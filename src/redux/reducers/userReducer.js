import {POST_USERINFO} from "../../constant/actionType";

const initialState = {
    token: false,
    userInfo: false,
};

const userReducer = ( state = initialState, action ) => {
    switch (action.type){
        case POST_USERINFO:
            return action.payload;
        default:
        return state;
    }
}

export default userReducer;