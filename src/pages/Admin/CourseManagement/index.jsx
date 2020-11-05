import React from 'react';
import Modal from './Modal';

export default function CourseManagement() {
    const CourseArray=[
        {
          maKhoaHoc: "55w",
          biDanh: "40-weeks",
          tenKhoaHoc: "40 weeks",
          moTa: "55w weekssqq",
          luotXem: 0,
          hinhAnh: "http://elearning0706.cybersoft.edu.vn/hinhanh/40-weeks.jpg",
          maNhom: "GP01",
          ngayTao: "18/10/2020",
          soLuongHocVien: 0,
          nguoiTao: {
            taiKhoan: "ghi",
            hoTen: "ghi",
            maLoaiNguoiDung: "GV",
            tenLoaiNguoiDung: "Giáo vụ"
          },
          danhMucKhoaHoc: {
            maDanhMucKhoahoc: "BackEnd",
            tenDanhMucKhoaHoc: "Lập trình Backend"
          }
        },
        {
          maKhoaHoc: "Backend_01",
          biDanh: "lap-trinh-golang-2020",
          tenKhoaHoc: "Lập trình Golang 2020",
          moTa: "Lập trình Golang 2020",
          luotXem: 321,
          hinhAnh: "http://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-golang-2020.png",
          maNhom: "GP01",
          ngayTao: "10/10/2020",
          soLuongHocVien: 0,
          nguoiTao: {
            taiKhoan: "khai",
            hoTen: "Le The",
            maLoaiNguoiDung: "GV",
            tenLoaiNguoiDung: "Giáo vụ"
          },
          danhMucKhoaHoc: {
            maDanhMucKhoahoc: "BackEnd",
            tenDanhMucKhoaHoc: "Lập trình Backend"
          }
        },
        {
          maKhoaHoc: "Backend_02",
          biDanh: "nodejs",
          tenKhoaHoc: "NodeJS",
          moTa: "Node.js là một nền tảng chạy trên môi trường V8 JavaScript runtime - một trình thông dịch JavaScript cực nhanh chạy trên trình duyệt Chrome. Bình thường thì bạn cũng có thể tải bộ V8 và nhúng nó vào bất cứ thứ gì; Node.js làm điều đó đối với các web server. JavaScript suy cho cùng cũng chỉ là một ngôn ngữ - vậy thì không có lý do gì để nói nó không thể sử dụng trên môi trường server tốt như là trong trình duyệt của người dùng được.",
          luotXem: 5567,
          hinhAnh: "http://elearning0706.cybersoft.edu.vn/hinhanh/nodejs.jpg",
          maNhom: "GP01",
          ngayTao: "10/10/2020",
          soLuongHocVien: 0,
          nguoiTao: {
            taiKhoan: "khai",
            hoTen: "Le The",
            maLoaiNguoiDung: "GV",
            tenLoaiNguoiDung: "Giáo vụ"
          },
          danhMucKhoaHoc: {
            maDanhMucKhoahoc: "FullStack",
            tenDanhMucKhoaHoc: "Lập trình Full Stack"
          }
        },
        {
          maKhoaHoc: "BackEnd_03",
          biDanh: "java-backeend",
          tenKhoaHoc: "Java BackeEnd",
          moTa: "Java Backend",
          luotXem: 100,
          hinhAnh: "http://elearning0706.cybersoft.edu.vn/hinhanh/java-backeend_gp01.jpg",
          maNhom: "GP01",
          ngayTao: "16/10/2020",
          soLuongHocVien: 0,
          nguoiTao: {
            taiKhoan: "hanGV",
            hoTen: "GV",
            maLoaiNguoiDung: "GV",
            tenLoaiNguoiDung: "Giáo vụ"
          },
          danhMucKhoaHoc: {
            maDanhMucKhoahoc: "BackEnd",
            tenDanhMucKhoaHoc: "Lập trình Backend"
          }
        },
        {
          maKhoaHoc: "Backend_01",
          biDanh: "lap-trinh-golang-2020",
          tenKhoaHoc: "Lập trình Golang 2020",
          moTa: "Lập trình Golang 2020",
          luotXem: 321,
          hinhAnh: "http://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-golang-2020.png",
          maNhom: "GP01",
          ngayTao: "10/10/2020",
          soLuongHocVien: 0,
          nguoiTao: {
            taiKhoan: "khai",
            hoTen: "Le The",
            maLoaiNguoiDung: "GV",
            tenLoaiNguoiDung: "Giáo vụ"
          },
          danhMucKhoaHoc: {
            maDanhMucKhoahoc: "BackEnd",
            tenDanhMucKhoaHoc: "Lập trình Backend"
          }
        },
        {
          maKhoaHoc: "Backend_02",
          biDanh: "nodejs",
          tenKhoaHoc: "NodeJS",
          moTa: "Node.js là một nền tảng chạy trên môi trường V8 JavaScript runtime - một trình thông dịch JavaScript cực nhanh chạy trên trình duyệt Chrome. Bình thường thì bạn cũng có thể tải bộ V8 và nhúng nó vào bất cứ thứ gì; Node.js làm điều đó đối với các web server. JavaScript suy cho cùng cũng chỉ là một ngôn ngữ - vậy thì không có lý do gì để nói nó không thể sử dụng trên môi trường server tốt như là trong trình duyệt của người dùng được.",
          luotXem: 5567,
          hinhAnh: "http://elearning0706.cybersoft.edu.vn/hinhanh/nodejs.jpg",
          maNhom: "GP01",
          ngayTao: "10/10/2020",
          soLuongHocVien: 0,
          nguoiTao: {
            taiKhoan: "khai",
            hoTen: "Le The",
            maLoaiNguoiDung: "GV",
            tenLoaiNguoiDung: "Giáo vụ"
          },
          danhMucKhoaHoc: {
            maDanhMucKhoahoc: "FullStack",
            tenDanhMucKhoaHoc: "Lập trình Full Stack"
          }
        },
        {
          maKhoaHoc: "BackEnd_03",
          biDanh: "java-backeend",
          tenKhoaHoc: "Java BackeEnd",
          moTa: "Java Backend",
          luotXem: 100,
          hinhAnh: "http://elearning0706.cybersoft.edu.vn/hinhanh/java-backeend_gp01.jpg",
          maNhom: "GP01",
          ngayTao: "16/10/2020",
          soLuongHocVien: 0,
          nguoiTao: {
            taiKhoan: "hanGV",
            hoTen: "GV",
            maLoaiNguoiDung: "GV",
            tenLoaiNguoiDung: "Giáo vụ"
          },
          danhMucKhoaHoc: {
            maDanhMucKhoahoc: "BackEnd",
            tenDanhMucKhoaHoc: "Lập trình Backend"
          }
        }
          ]
    const renderCourse = () =>{
        return CourseArray?.map((course, index)=>{
            return <tr key={index}>
                        <td >{course.maKhoaHoc}</td>
                        <td>{course.tenKhoaHoc}</td>
                        <td>{course.luotXem}</td>
                        <td>{course.ngayTao}</td>
                        <td className="text-left" style={{width:"5%"}}>
                          <button className="btn btn-primary mx-2" title="Detail co"><i class="fa fa-search"></i></button>
                        </td>
                        <td className="text-left" style={{width:"5%"}}>                         
                          <button className="btn btn-warning mx-2" title="Edit course"><i class="fa fa-edit"></i></button>
                        </td>
                        <td className="text-left"style={{width:"5%"}}>
                          <button className="btn btn-danger mx-2" title="Delete course"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
        })}
  return (
          <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search Course..." ariaLabel="Search" ariaDescribedby="basic-addon1"/>
                <div>
                    <span>
                    <button className="btn btn-success">Search</button>
                    </span>
                </div>
            </div>
            <div className="from-group">
                  <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target=".bd-example-modal-lg">Add Course</button>
                  <Modal/>
            </div>
            <table className="table">
                <thead className="bg-dark text-light font-weight-bold">
                    <tr>
                        <td>ID</td>
                        <td>Course Name</td>
                        <td>Views</td>
                        <td>Create Date</td>
                        <td style={{width:"5%"}}></td>
                        <td style={{width:"5%"}}></td>
                        <td style={{width:"5%"}}></td>
                    </tr>
                </thead>
                <tbody className="table__content">
                    {renderCourse()}
                </tbody>
            </table>
    </div>
  )
}