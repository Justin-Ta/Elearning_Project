export const getTrendingCoursesByPageUrl = (currentPage) =>{
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=4&MaNhom=GP01`;
}

export const getCoursesByCategory = (category) => {
    return `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=GP01`
}