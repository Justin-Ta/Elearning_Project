import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Login() {
   let backGround=[
        {src: '/img/bg_1.png'},
        {src: '/img/bg_2.png'},
        {src: '/img/bg_3.jpg'},
        {src: '/img/bg_4.png'},
        {src: '/img/bg_5.png'},
        {src: '/img/bg_6.png'},
        {src: '/img/bg_7.png'},
    ]
    return (
        <div className="login">
            <div className="bg" style={{backgroundImage: `url(${backGround[Math.floor(Math.random()*7)].src})`}}>
            <div className="container pt-5">
            <div className="inputSignUp">
            <h2 className="text-center">ĐĂNG NHẬP</h2>
            <div className="form-group">
                <p>Tài Khoản</p>
                <input name="userName" className="form-control" />
            </div>

            <div className="form-group">
                <p>Mật Khẩu</p>
                <input name="passWord" className="form-control" />
            </div>

            <div className="form-group text-center">
                <button className="btn btn-success m-2">Đăng Nhập</button>
                <NavLink to="/signup" className="btn btn-primary m-2">Đăng Ký</NavLink>
            </div>
            </div>
        </div>
        </div>
        </div>
        
        
    )
}
