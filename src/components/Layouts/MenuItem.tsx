"use client";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";
import { SiGooglemessages } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { BiSolidHelpCircle } from "react-icons/bi";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const MenuItem = () => {
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["1"]}
      className="active:text-red-600 "
    >
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<GrFavorite />}>
        Favorite
      </Menu.Item>
      <Menu.Item key="3" icon={<UnorderedListOutlined />}>
        List
      </Menu.Item>
      <Menu.Item key="4" icon={<SiGooglemessages />}>
        Messages
      </Menu.Item>
      <hr />
      <Menu.Item key="5" icon={<FaUserFriends />}>
        Friends
      </Menu.Item>
      <Menu.Item key="6" icon={<RiSettings5Fill />}>
        Setting
      </Menu.Item>
      <Menu.Item key="7" icon={<BiSolidHelpCircle />}>
        Help
      </Menu.Item>
    </Menu>
  );
};

export default MenuItem;
