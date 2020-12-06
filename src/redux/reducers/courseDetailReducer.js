import { POST_COURSE_DETAIL } from "../../constant/actionType";

const initiaState = { 
    "maKhoaHoc": null,
    "biDanh": null,
    "tenKhoaHoc": null, 
    "moTa": null,
    "luotXem": null, 
    "hinhAnh": null, 
    "maNhom": null, 
    "ngayTao": null, 
    "soLuongHocVien": null, 
    "nguoiTao": { 
        "taiKhoan": null,
        "hoTen": null, 
        "maLoaiNguoiDung": null, 
        "tenLoaiNguoiDung": null
    }, 
    "danhMucKhoaHoc": { 
        "maDanhMucKhoahoc": null, 
        "tenDanhMucKhoaHoc": null,
    }
};

const courseDetailReducer = (state = initiaState, action) => {
    switch (action.type) {
        case POST_COURSE_DETAIL:
            return action.payload;
        default:
            return state;
    }
}

export default courseDetailReducer;