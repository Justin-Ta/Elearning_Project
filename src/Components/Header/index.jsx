import React from 'react';
import { Input, Button, Badge, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../BackToTop';
const { Search } = Input;


export default function Header() {
    let isLogIn = true;

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink to={"/"} className="mr-3 logo">
                    <img src="/img/icon/icon_ELearning.ico" alt="logo" />
                    <span>Learning</span>
                </NavLink>
                <Search className=""
                    placeholder="Search for anything"
                    onSearch={value => console.log(value)}
                    allowClear={true}
                />

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {isLogIn ?
                    <>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ml-3 my-2">
                                    <Button className="logoutBtn">
                                        Log out
                                    </Button>
                                </li>
                            </ul>
                        </div>

                        <div className="ml-3 my-2 shopping-cart">
                            <ShoppingCartOutlined />
                            <NavLink to="/userprofile" className="avatar-item ml-3 my-2" style={{ cursor: "pointer" }} >
                                <Badge count={2}>
                                    {false ?
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        :
                                        <Avatar icon={<UserOutlined />} />
                                    }
                                </Badge>
                            </NavLink>
                        </div>
                    </>
                    :
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
                }
            </nav>
            <ScrollToTop />
        </div>
    )
}


