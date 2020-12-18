import { GET_COURSES } from "../../constant/actionType";
const initialState = {
    
};

const courseManagementReducer = ( state = initialState, action ) => {
    // const newState = {...state};
    switch (action.type){
        case GET_COURSES:
            return action.payload;
        
        default:
        return state;
    }
}

export default courseManagementReducer;