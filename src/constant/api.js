import { groupID } from "./common";

// Course API
export const getTrendingCoursesByPageUrl = (currentPage) =>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=8&MaNhom=${groupID}`;
}

export const getCategoryCoursesByPageUrl = (category) => {
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=${groupID}`;
}

export const getDetail= (CourseId) =>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${CourseId}`;
}

export const getCourse= `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${groupID}`;

export const getPendingCourseUrl = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet';

export const getRegisteredCoursesUrl = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet';

export const registerCourseUrl = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc';

export const unRegisterCourseUrl = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh';

export const createCourseUrl = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc';

export const updateCourseUrl = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc';

// User API
export const getListUser = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`;

export const getUserUrl = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung';

export const logInUrl = "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";

export const signUpUrl = "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";

export const updateUserUrl = "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";

export const deleteUserAPI=(userName)=>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`
}

export const deleteCourseAPI=(courseName)=>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${courseName}`
}

export const searchUserAPI=(keyWord)=>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}&tuKhoa=${keyWord}`
}