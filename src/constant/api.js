export const getCourseListByPageUrl = (currentPage, pageSize) =>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=4&MaNhom=GP01`;
}