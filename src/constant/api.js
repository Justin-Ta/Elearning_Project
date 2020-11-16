// Course API
export const getCourseListByPageUrl = (currentPage, pageSize) =>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=4&MaNhom=GP01`;
}
export const getDetail=(CourseId)=>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${CourseId}`
}

export const getCourse=()=>{
    return 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
}


// User API
export const getListUser=()=>{
    return 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
}

export const LOGIN="https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap"

export const SIGNIN="https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy"


export const USER_LOGIN= "userlogin";
export const TOKEN= "accessToken"
