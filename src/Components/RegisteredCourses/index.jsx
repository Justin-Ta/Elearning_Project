import React from 'react';
import CourseItem from '../CourseItem';
import { Row, Col } from 'antd';

export default function RegisteredCourses() {
    const course = {
        maKhoaHoc: "55w",
        biDanh: "backend-node-js",
        tenKhoaHoc: "Backend Node js",
        moTa: "Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng. Wikipedia",
        luotXem: 0,
        hinhAnh: "https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-golang-2020.png",
        maNhom: "GP01",
        ngayTao: "05/11/2020",
        soLuongHocVien: 0,
    }
    return (
        <Row gutter={[16, 30]}>
            <Col lg={6} sm={12} xs={24} key={0}>
                <div className="courseItemSmall">
                    <CourseItem course={course}/>
                </div>
            </Col>
        </Row>
    )
}
