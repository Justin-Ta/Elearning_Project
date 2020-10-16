import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Login() {
   let backGround=[
        {src: './img/bgLoginPage/bg_1.png'},
        {src: './img/bgLoginPage/bg_2.png'},
        {src: './img/bgLoginPage/bg_3.jpg'},
        {src: './img/bgLoginPage/bg_4.png'},
        {src: './img/bgLoginPage/bg_5.png'},
        {src: './img/bgLoginPage/bg_6.png'},
        {src: './img/bgLoginPage/bg_7.png'},
    ]
    return (
        <div className="login">
            <div className="bg" style={{backgroundImage: `url(${backGround[Math.floor(Math.random()*7)].src})`}}>
            <div className="container pt-5">
            <div className="inputLogin">
            <h2 className="text-center">LOGIN</h2>
            <div className="form-group">
                <p>User Name</p>
                <input name="userName" className="form-control" placeholder="Type your username"/>
            </div>

            <div className="form-group">
                <p>Password</p>
                <input name="passWord" className="form-control" placeholder="Type your password"/>
            </div>

            <div className="form-group text-center">
                <button className="btn btn-success form-control my-3">Login</button>
            </div>
            <p className="text-center">Don't have an account? <NavLink to="/signup">Sign in</NavLink></p>
            </div>
        </div>
        </div>
        </div>
        
        
    )
}
