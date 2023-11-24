"use client";
import React, { useState, useEffect } from "react";
import { Layout, Menu, theme, Drawer } from "antd";
import { MdViewInAr } from "react-icons/md";
import Link from "next/link";
import Header from "./Header";
import MenuItem from "./MenuItem";
import FooterItem from "./FooterItem";
import useMobileDetection from "../../utils/phoneSizeDetect";
const { Sider, Content, Footer } = Layout;

const HomeLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useMobileDetection();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleSidebar = () => {
    if (isMobile) {
      setShowSidebar(!showSidebar);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <Layout>
      {isMobile ? (
        <Drawer
          title="Sidebar"
          placement="left"
          visible={showSidebar}
          onClose={() => setShowSidebar(false)}
          width={256}
        >
          <MenuItem />
        </Drawer>
      ) : (
        <Sider
          style={{
            background: colorBgContainer,
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={isMobile ? 0 : 80}
          width={150}
        >
          <div>
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  type: "item",
                  icon: <MdViewInAr />,
                  label: <Link href="/">Viewer</Link>,
                },
              ]}
            />
          </div>

          <MenuItem />
        </Sider>
      )}
      <Layout>
        <Header
          collapsed={collapsed}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
        />
        <Content
          style={{
            margin: "20px 16px",
            padding: 0,
            minHeight: "100vh",
            background: colorBgContainer,
            marginLeft: `${isMobile ? "0" : collapsed ? "7%" : "12%"}`,
            transitionDuration: "0.3s",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            marginLeft: `${isMobile ? "0" : collapsed ? "5.5%" : "11%"}`,
            transitionDuration: "0.3s",
            padding: "0",
          }}
        >
          <FooterItem />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
