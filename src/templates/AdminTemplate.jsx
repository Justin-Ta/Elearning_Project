import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DesktopOutlined,
  BookOutlined,
  EditOutlined,
  HomeOutlined
  // VideoCameraOutlined,
  // UploadOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = ({ Component, ...props }) => {
  const [state, setState] = useState({
    collapsed: false,
  });
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          <>
            <Layout>
              <Sider trigger={null} collapsible collapsed={state.collapsed}>
                <div style={{ position: "fixed" }}>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item
                        icon={<HomeOutlined />}
                        title="Turn To Home Page"
                      >
                        <NavLink to="/">
                          HOME
                        </NavLink>
                      </Menu.Item>
                    <SubMenu key="sub1" icon={<BookOutlined />} title="COURSE">
                      <Menu.Item
                        key="2"
                        icon={<DesktopOutlined />}
                        title="Course Management"
                      >
                        <NavLink to="/admin/coursesmanagement">
                          Course Mgn
                        </NavLink>
                      </Menu.Item>

                      <Menu.Item
                        key="3"
                        icon={<EditOutlined/>}
                        title="Add Course"
                      >
                        <NavLink to="/admin/courseedit">
                          Add Course
                        </NavLink>
                      </Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub2" icon={<UserOutlined />} title="USER">
                      <Menu.Item
                        key="4"
                        icon={<UserOutlined />}
                        title="Student Management"
                      >
                        <NavLink to="/admin/usersmanagement">
                          Student Mgn
                        </NavLink>
                      </Menu.Item>

                      <Menu.Item
                        key="5"
                        icon={<EditOutlined />}
                        title="Student Edit"
                      >
                        <NavLink to="/admin/useredit">
                          Add User
                        </NavLink>
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </div>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                >
                  {React.createElement(
                    state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: toggle,
                    }
                  )}
                </Header>
                <Content
                  className="site-layout-background"
                  style={{
                    margin: "0 16px",
                    padding: 24,
                    minHeight: "100vh",
                  }}
                >
                  <Component />
                </Content>
              </Layout>
            </Layout>
          </>
        );
      }}
    />
  );
};
