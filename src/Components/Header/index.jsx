import React from 'react';
import { Input, Button, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Link, Text } = Typography;
const { Search } = Input;


export default function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link href="#a" target="_blank" className="mr-auto">
                    <img className="logo" src="./img/icon/icon_ELearning.ico" alt="" />
                    <span>Learning</span>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-3 my-2">
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: 300 }}
                            />
                        </li>
                        <li className="nav-item ml-3 my-2">
                            <a href="#">
                                <Button className="loginBtn">
                                    Log in
                                </Button>
                            </a>
                        </li>
                        <li className="nav-item ml-3 my-2">
                            <a href="#">
                                <Button type="primary" className="signupBtn">
                                    Sign up
                            </Button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ml-3 my-2 shopping-cart">
                        <ShoppingCartOutlined />
                </div>
            </nav>
        </div>
    )
}
