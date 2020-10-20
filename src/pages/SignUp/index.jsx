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
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span className="input-group-text bg-dark" id="basic-addon1"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="text" name="userName" className="form-control" placeholder="Type your username" ariaLabel="Username" ariaDescribedby="basic-addon1"/>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span className="input-group-text bg-dark" id="basic-addon1"><i class="fa fa-lock"></i></span>
                            </div>
                            <input type="text" name="passWord" className="form-control" placeholder="Type your password" ariaLabel="Username" ariaDescribedby="basic-addon1"/>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span className="input-group-text bg-dark" id="basic-addon1"><i class="fa fa-lock"></i></span>
                            </div>
                            <input type="text" name="rePassWord" className="form-control" placeholder="Retype your password" ariaLabel="Username" ariaDescribedby="basic-addon1"/>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span className="input-group-text bg-dark" id="basic-addon1"><i class="fa fa-user-circle"></i></span>
                            </div>
                            <input type="text" name="name" className="form-control" placeholder="Type your name" ariaLabel="Username" ariaDescribedby="basic-addon1"/>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span className="input-group-text bg-dark" id="basic-addon1"><i class="fa fa-phone"></i></span>
                            </div>
                            <input type="phone" name="phone" className="form-control" placeholder="Type your phone number" ariaLabel="Username" ariaDescribedby="basic-addon1"/>
                        </div>

                         <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span className="input-group-text bg-dark" id="basic-addon1"><i class="fa fa-at"></i></span>
                            </div>
                            <input type="email" name="email" className="form-control" placeholder="Type your email" ariaLabel="Username" ariaDescribedby="basic-addon1"/>
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
