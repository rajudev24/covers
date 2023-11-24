"use client";
import { Button, Space, Select, Input, Avatar, theme } from "antd";
import { FiMessageSquare } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { UserOutlined } from "@ant-design/icons";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const Header = ({ collapsed, isMobile, toggleSidebar }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Search } = Input;
  return (
    <div
      style={{
        padding: 0,
        background: colorBgContainer,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {collapsed ? (
        <Button
          type="text"
          icon={<MenuUnfoldOutlined />}
          onClick={toggleSidebar}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            marginLeft: collapsed ? (isMobile ? "0%" : "6%") : "0%",
          }}
        />
      ) : (
        <Button
          type="text"
          icon={<MenuFoldOutlined />}
          onClick={toggleSidebar}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            marginLeft: isMobile ? "0" : "11%",
          }}
        />
      )}
      <Space>
        {!isMobile && (
          <Select
            showSearch
            placeholder="Categories"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Not Identified",
              },
              {
                value: "2",
                label: "Closed",
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
              {
                value: "5",
                label: "Resolved",
              },
              {
                value: "6",
                label: "Cancelled",
              },
            ]}
          />
        )}
        <Search
          placeholder="input search text"
          // onSearch={onSearch}
          style={{
            width: `${isMobile ? "200px" : "600px"}`,
          }}
        />
      </Space>
      <Space style={{ marginRight: "20px" }}>
        <FiMessageSquare size={24} />
        <MdNotificationsNone size={25} />
        <Avatar icon={<UserOutlined />} />
      </Space>
    </div>
  );
};

export default Header;
