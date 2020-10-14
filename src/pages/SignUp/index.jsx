import React from 'react';

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
                        <h2 className="text-center">SIGN IN</h2>
                        <div className="form-group">
                            <p>User Name</p>
                            <input name="userName" className="form-control" placeholder="Type your username"/>
                        </div>

                        <div className="form-group">
                            <p>Password</p>
                            <input name="passWord" className="form-control" placeholder="Type your password"/>
                        </div>

                        <div className="form-group">
                            <p>Retype Password</p>
                            <input name="rePassWord" className="form-control" placeholder="Retype your password"/>
                        </div>

                        <div className="form-group">
                            <p>Name</p>
                            <input name="name" className="form-control" placeholder="Type your name"/>
                        </div>


                        <div className="form-group">
                            <p>Phone Number</p>
                            <input name="phone" className="form-control" placeholder="Type your phone number"/>
                        </div>

                        <div className="form-group text-center">
                            <button className="form-control btn-primary my-3">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
