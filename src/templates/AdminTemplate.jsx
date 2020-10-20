import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DesktopOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Header, Sider, Content } = Layout;
// const { SubMenu } = Menu;

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
                <div className="logo" src="./img/icon/icon_ELearning.ico"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>              
                  <Menu.Item key="1" icon={<DesktopOutlined />} title="Course Management">
                    <NavLink to="/admin/coursesmanagement">Course Management</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<UserOutlined />} title="Student Management">
                   <NavLink to="/admin/usersmanagement">Users Management</NavLink>
                  </Menu.Item>
                </Menu>              
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
                    minHeight: "75vh",
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
