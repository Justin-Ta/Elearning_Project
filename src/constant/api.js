// Course API
export const getTrendingCoursesByPageUrl = (currentPage) =>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=8&MaNhom=GP11`;
}

export const getCategoryCoursesByPageUrl = (currentPage, category) => {
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_${category}PhanTrang?page=${currentPage}&pageSize=8&MaNhom=GP11`;
}
export const getDetail= (CourseId) =>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${CourseId}`;
}

export const getCourse= 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP11';

// User API
export const getListUser = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11';

export const logInUrl = "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";

export const signUpUrl = "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";

export const deleteUserAPI=(userName)=>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`
}

