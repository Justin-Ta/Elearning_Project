import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Dropdown, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink, useHistory } from 'react-router-dom';
import ScrollToTop from '../BackToTop';
import { TOKEN, USERINFO } from '../../constant/common';
import { postUserAction } from '../../redux/actions/user';

const { Search } = Input;

export default function Header() {
    const [headerStyle, setHeaderStyle] = useState({})
    const state = useSelector(state => state.userReducer);
    const { token, userInfo } = state;
    let isLogIn = token;
    let history = useHistory();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postUserAction());
    }, [dispatch])

    const logout = () => {
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(USERINFO);
        dispatch(postUserAction());
        if (history.location.pathname.includes("/userprofile")) history.push("/");
    }

    const showSearch = () => {
        console.log(headerStyle);
        if (JSON.stringify(headerStyle) === JSON.stringify({})) {
            return setHeaderStyle({
                height: "130px",
            });
        }
        return setHeaderStyle({});
    }

    const menu = (
        <div className="menu">
            <NavLink to="/userprofile" style={{ cursor: "pointer" }} >
                <i class="fa fa-home" aria-hidden="true"></i> Go to my profile
            </NavLink>
            <hr/>
            { userInfo && userInfo.role === "HV" && 
                <NavLink to="/admin/coursesmanagement" style={{ cursor: "pointer" }} >
                    <i class="fa fa-lock" aria-hidden="true"></i> Go to Admin page
                </NavLink>
            }
            <hr/>
            <div className="logoutBtn" onClick={logout}>
                <i class="fa fa-sign-out" aria-hidden="true"></i> Log out
            </div>
        </div>
    )

    return (
        <div className="header" style={headerStyle}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink to={"/"} className="mr-3 logo">
                    <img src="/img/icon/icon_ELearning.ico" alt="logo" />
                    <span>Learning</span>
                </NavLink>
                <Search placeholder="Search for anything"
                    onSearch={value => console.log("Search keyword", value)}
                    allowClear={true}
                />
                <div className="d-flex">
                    <span className="searchCollappseIcon pr-3">
                        <SearchOutlined style={{ fontSize: "20px" }} onClick={showSearch} />
                    </span>
                    {
                        isLogIn ?
                            <>
                                <span className="shoppingCartIcon pr-3">
                                    <ShoppingCartOutlined />
                                </span>
                                <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]} arrow="true">
                                    <Avatar src={userInfo.name ? `/img/AvatarAlphabet/${userInfo.name.charAt(0).toUpperCase()}.png` : '/img/icon/EmptyAvatar.svg'}
                                        style={{ background: "grey" }}
                                    />
                                </Dropdown>
                            </>
                            :
                            <>
                                    <Button className="loginBtn mr-3">
                                        <NavLink to="/login">Log in</NavLink>
                                    </Button>
                                    <Button type="primary" className="signupBtn">
                                        <NavLink to="/signup">Sign up</NavLink>
                                    </Button>
                            </>
                    }
                </div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button> */}
                {/* {isLogIn ?
                    <>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ml-3 my-2">
                                    <Button className="logoutBtn" onClick={logout}>
                                        Log out
                                    </Button>
                                </li>
                            </ul>
                        </div>

                        <div className="ml-3 my-2 shopping-cart">
                            <div className="searchCollappseIcon">
                                <SearchOutlined style ={{ fontSize: "20px", paddingRight: "16px"}} onClick={ showSearch } />
                            </div>
                            <div className="shoppingCartIcon">
                                <ShoppingCartOutlined />
                            </div>
                            {
                                userInfo.name &&
                                    <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
                                        <Avatar src={`/img/AvatarAlphabet/${userInfo.name.charAt(0).toUpperCase()}.png`} 
                                        style={{ background: "grey" }} 
                                        />
                                    </Dropdown>
                            }
                            
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
                } */}
            </nav>
            <ScrollToTop />
        </div>
    )
}


