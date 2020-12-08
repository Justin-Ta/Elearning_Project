import {POST_USERINFO, UPDATE_USERINFO, POST_PENDING_COURSES, POST_REGISTERED_COURSES, UPDATE_PENDING_COURSES, DELETE_USERINFO} from "../../constant/actionType";

const initialState = {
    taiKhoan:undefined,
    hoTen:undefined,
    soDT:undefined,
    maLoaiNguoiDung:undefined,
    maNhom:undefined,
    matKhau:undefined,
    email:undefined,
    KhoaHocChoXetDuyet:[],
    KhoaHocDaXetDuyet:[],
};

const userReducer = ( state = initialState, action ) => {
    const newState = {...state};
    switch (action.type){
        case POST_USERINFO:
            Object.keys(state).forEach(key => {
                if ( key === 'KhoaHocChoXetDuyet' || key === 'KhoaHocDaXetDuyet') return;
                return newState[key] = action.payload[key];
            })
            return newState;
        case DELETE_USERINFO:
            Object.keys(state).forEach(key => {
                return newState[key] = action.payload[key];
            })
            return newState;
        case UPDATE_USERINFO:
            ['hoTen', 'soDT', 'email'].map( key => {
                return newState[key] = action.payload[key];
            });
            return newState;
        case POST_PENDING_COURSES:
            newState.KhoaHocChoXetDuyet = action.payload;
            return newState;
        case POST_REGISTERED_COURSES:
            newState.KhoaHocDaXetDuyet = action.payload;
            return newState;
        case UPDATE_PENDING_COURSES:
            newState.KhoaHocChoXetDuyet.push(action.payload);
            return newState;
        default:
        return state;
    }
}

export default userReducer;