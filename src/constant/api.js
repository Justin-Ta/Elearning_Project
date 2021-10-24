import { groupID } from "./common";

const domain = 'https://elearning0706.cybersoft.edu.vn/api';
// export const _domain = 'http://localhost:5000';
export const _domain = 'https://elearning-be.herokuapp.com';


// Course API
export const getTrendingCoursesByPageUrl = (currentPage) =>{
    return `${_domain}/api/courses/all?page=${currentPage}&limit=${8}`;
}

export const getCategoryCoursesByPageUrl = (category, currentPage) => {
    return `${_domain}/api/courses/all?page=${currentPage}&limit=${8}&category=${category}`;
}

export const getDetail= (CoursePath) =>{
    return `${_domain}/api/courses/${CoursePath}`;
}

export const getCourse= `${_domain}/api/courses/all?page=0&limit=0`;

export const getPendingCourseUrl = (currentPage) => `${_domain}/api/courses/registrations?page=${currentPage}&limit=${10}`;

export const registerCourseUrl = `${_domain}/api/courses/register`;

export const unRegisterCourseUrl = (id) => `${_domain}/api/courses/unregister/${id}`;

export const rejectRegistrationUrl = `${_domain}/api/courses/reject`; 

export const approveRegistrationUrl = `${_domain}/api/courses/approve`; 

export const createCourseUrl = `${_domain}/api/courses/create-course`;

export const updateCourseUrl = `${domain}/QuanLyKhoaHoc/CapNhatKhoaHoc`;

export const deleteCourseAPI= `${_domain}/api/courses/delete`;

// User API

export const getListUser = `${domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`;

export const getUserUrl = (uid) => `${_domain}/api/users/${uid}`;

export const logInUrl = `${_domain}/api/users/login`;

export const signUpUrl = `${_domain}/api/users/signup`;

export const updateUserUrl = (uid) => `${_domain}/api/users/${uid}`;

export const updateUserAvatarUrl = (uid) => `${_domain}/api/users/change-avatar/${uid}`;

export const deleteUserAPI=(userName)=>{
    return `${domain}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`
}

export const searchUserAPI=(keyWord)=>{
    return `${domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}&tuKhoa=${keyWord}`
}