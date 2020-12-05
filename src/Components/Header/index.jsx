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
        <NavLink to="/userprofile" style={{ cursor: "pointer" }}>
          <i class="fa fa-home" aria-hidden="true"></i> Go to my profile
        </NavLink>
        <div>
          {userInfo && userInfo.role === "GV" && (
            <div>
              <hr/>
              <NavLink to="/admin" style={{ cursor: "pointer" }}>
                <i class="fa fa-lock" aria-hidden="true"></i> Go to Admin page
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <hr/>
          <div className="logoutBtn" onClick={logout}>
            <i class="fa fa-sign-out" aria-hidden="true"></i> Log out
          </div>
        </div>
      </div>
    );

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
            </nav>
            <ScrollToTop />
        </div>
    )
}


