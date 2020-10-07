import React from 'react'
import { NavLink } from 'react-router-dom'
import './styling.scss'

export default function SignUp() {
   let backGround=[
        {src: '/img/bg_1.jpg'},
        {src: '/img/bg_2.png'},
        {src: '/img/bg_3.jpg'},
        {src: '/img/bg_4.jpg'},
    ]
   
    return (
        <div className="bg" style={{backgroundImage: `url(${backGround[Math.floor(Math.random()*4)].src})`}}>
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
        
    )
}
