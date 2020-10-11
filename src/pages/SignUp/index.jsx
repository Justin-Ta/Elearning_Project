import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
    let backGround = [
        { src: '/img/bgLoginPage/bg_1.png' },
        { src: '/img/bgLoginPage/bg_2.png' },
        { src: '/img/bgLoginPage/bg_3.jpg' },
        { src: '/img/bgLoginPage/bg_4.png' },
        { src: '/img/bgLoginPage/bg_5.png' },
        { src: '/img/bgLoginPage/bg_6.png' },
        { src: '/img/bgLoginPage/bg_7.png' },
    ]
    return (
        <div className="signup">
            <div className="bg" style={{ backgroundImage: `url(${backGround[Math.floor(Math.random() * 7)].src})` }}>
                <div className="container pt-5">
                    <div className="inputSignUp">
                        <h2 className="text-center">ĐĂNG KÝ</h2>
                        <div className="form-group">
                            <p>Tài Khoản</p>
                            <input name="userName" className="form-control" />
                        </div>

                        <div className="form-group">
                            <p>Mật Khẩu</p>
                            <input name="passWord" className="form-control" />
                        </div>

                        <div className="form-group">
                            <p>Nhập Lại Mật Khẩu</p>
                            <input name="rePassWord" className="form-control" />
                        </div>

                        <div className="form-group">
                            <p>Họ Tên</p>
                            <input name="name" className="form-control" />
                        </div>


                        <div className="form-group">
                            <p>Số điện thoại</p>
                            <input name="phone" className="form-control" />
                        </div>

                        <div className="form-group text-center">
                            <button className="btn btn-success m-2">Đăng Ký</button>
                            <NavLink to="/login" className="btn btn-primary m-2">Đăng Nhập</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
