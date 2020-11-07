import {GET_USER_LIST} from "../../constant/actionType";

const initiaState = false;

const userReducer = ( state = initiaState, action ) => {
    switch (action.type){
        case GET_USER_LIST:
            return action.payload;
        default:
        return state; 
    }
}

export default userReducer;