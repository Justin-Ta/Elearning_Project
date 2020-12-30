import React from "react";
import { Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  BookOutlined,
  HomeOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Sider, Content } = Layout;

export const AdminTemplate = ({ Component, ...restProps }) => {

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
            >
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item
                  icon={<HomeOutlined />}
                  title="Turn To Home Page"
                >
                  <NavLink to="/">
                    HOME
                    </NavLink>
                </Menu.Item>

                <Menu.Item icon={<BookOutlined />} title="COURSE">
                  <NavLink to="/admin/coursesmanagement">COURSE</NavLink>
                </Menu.Item>

                <Menu.Item icon={<UserOutlined />} title="COURSE">
                  <NavLink to="/admin/usersmanagement">USER</NavLink>
                </Menu.Item>

                {/* <SubMenu key="sub2" icon={<UserOutlined />} title="USER">
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
                  </SubMenu> */}
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                }}
              >
                <Component {...propsRoute} />
              </Content>
            </Layout>
          </Layout>
        );
      }}
    />
  );
};
