import {GET_USER_LIST, SEARCH_USER, REMOVE_USER_MANAGEMENT} from "../../constant/actionType";

const initialState = {
        taiKhoan: undefined,
        hoTen: undefined,
        email: undefined,
        soDt: undefined,
        maLoaiNguoiDung: undefined,}


const userManagementReducer = ( state = initialState, action ) => {
    const newState = {...state};
    switch (action.type){
        case GET_USER_LIST:
            return   action.payload;
        case SEARCH_USER:
            return  action.payload;
        case REMOVE_USER_MANAGEMENT:
            const index= newState.findIndex((user)=>{
                return user.taiKhoan= action.payload;
            });
            newState.splice(index, 1);
            return newState;
        default:
        return state;
    }
}

export default userManagementReducer;