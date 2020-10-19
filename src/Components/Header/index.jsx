import React from 'react';
import { Input, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../BackToTop';
const { Search } = Input;


export default function Header() {

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink to={"/"} className="mr-3 logo">
                    <img src="./img/icon/icon_ELearning.ico" alt="logo" />
                    <span>Learning</span>
                </NavLink>
                <Search className=""
                    placeholder="Search for anything"
                    onSearch={value => console.log(value)}
                />

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-3 my-2">
                            <Button className="loginBtn">
                                <NavLink to="/login">Log in</NavLink>
                            </Button>
                        </li>
                        <li className="nav-item ml-3 my-2">
                            <Button type="primary" className="signupBtn">
                                <NavLink to="/signup">Sign up</NavLink>
                            </Button>
                        </li>
                    </ul>
                </div>

                <div className="ml-3 my-2 shopping-cart">
                    <ShoppingCartOutlined />
                </div>

            </nav>
            <ScrollToTop/>
        </div>
    )
}


