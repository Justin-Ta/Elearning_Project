import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Dropdown, Avatar } from "antd";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import { NavLink, useHistory } from "react-router-dom";
import ScrollToTop from "../BackToTop";
import { TOKEN } from "../../constant/common";
import { deleteInfoAction, postUserInfoAction } from "../../redux/actions/user";
import {
  getPendingCoursesAction,
  getRegisteredCoursesAction,
} from "../../redux/actions/course";

const { Search } = Input;

export default function Header() {
  let history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem(TOKEN);
  const state = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!token) return;
    dispatch(postUserInfoAction());
  }, [dispatch, token, state.taiKhoan]);

  useEffect(() => {
    if (!token || !state.taiKhoan) return;
    dispatch(getRegisteredCoursesAction({ taiKhoan: state.taiKhoan }));
    dispatch(getPendingCoursesAction({ taiKhoan: state.taiKhoan }));
  }, [dispatch, token, state.taiKhoan]);

  const [headerStyle, setHeaderStyle] = useState({});
  const [CollappseIconGroupStyle, setCollappseIconGroupStyle] = useState({});
  const { hoTen: name, maLoaiNguoiDung: role } = state;

  const logout = () => {
    localStorage.removeItem(TOKEN);
    dispatch(deleteInfoAction());
    if (history.location.pathname.includes("/userprofile")) history.push("/");
  };

  const showSearch = () => {
    if (JSON.stringify(headerStyle) === JSON.stringify({})) {
      return setHeaderStyle({
        height: "130px",
      });
    }
    return setHeaderStyle({});
  };

  const showMore = () => {
    if (JSON.stringify(CollappseIconGroupStyle) === JSON.stringify({})) {
      return setCollappseIconGroupStyle({
        width: "100%",
      });
    }
    return setCollappseIconGroupStyle({});
  };

  const onBlur = () => {
    setHeaderStyle({});
    setCollappseIconGroupStyle({});
  };

  const onSearch = (key) => {
    if (!key && key !== 0) return;
    key = key.trim();
    if (key === "") return;
    const url = "/search/" + key;
    history.push(url);
  };

  const menu = (
    <div className="menu">
      <NavLink to="/userprofile" style={{ cursor: "pointer" }}>
        <i className="fa fa-home" aria-hidden="true"></i> Go to my profile
      </NavLink>
      <hr />
      {role === "GV" && (
        <>
          <NavLink to="/admin/coursesmanagement" style={{ cursor: "pointer" }}>
            <i className="fa fa-lock" aria-hidden="true"></i> Go to Admin page
          </NavLink>
          <hr />
        </>
      )}
      <div>
        {/* <hr /> */}
        <div className="logoutBtn" onClick={logout}>
          <i class="fa fa-sign-out" aria-hidden="true"></i> Log out
        </div>
      </div>
    </div>
  );

  //console.count('header');

  return (
    <div className="header" style={headerStyle}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink to={"/"} className="mr-3 logo">
            <img src="/img/icon/icon_ELearning.ico" alt="logo" />
            <span>Learning</span>
          </NavLink>
          <Search placeholder="Search course name" onSearch={onSearch} />
          <div className="CollappseIconGroup">
            <span className="searchCollappseIcon pr-3">
              <SearchOutlined onClick={showSearch} onBlur={onBlur} />
            </span>
            {!token && (
              <span className="moreCollappseIcon pr-3">
                <MoreOutlined onClick={showMore} onBlur={onBlur} />
              </span>
            )}
          </div>
          <div>
            {token ? (
              <>
                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  trigger={["click"]}
                  arrow="true"
                >
                  <Avatar
                    src={
                      name
                        ? `/img/AvatarAlphabet/${name
                            .charAt(0)
                            .toUpperCase()}.png`
                        : "/img/icon/EmptyAvatar.svg"
                    }
                    style={{ background: "grey" }}
                  />
                </Dropdown>
              </>
            ) : (
              <div className="btnGroup" style={CollappseIconGroupStyle}>
                <NavLink to="/login">
                  <Button className="loginBtn mr-3">Log in</Button>
                </NavLink>
                <NavLink to="/signup">
                  <Button type="primary" className="signupBtn">
                    Sign up
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
      <ScrollToTop />
    </div>
  );
}
