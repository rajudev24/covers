import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Space } from "antd";

export default function MoreArtists() {
  return (
    <div className="p-2 w-full mt-12">
      <h1 className="font-semibold text-2xl">More Artists</h1>
      <div className="grid grid-cols-3 gap-y-8 mt-4 gap-x-12 ">
        <span className="font-semibold">
          {" "}
          <Avatar size={64} icon={<UserOutlined />} /> Oliver Jons
        </span>
        <span className="font-semibold">
          {" "}
          <Avatar size={64} icon={<UserOutlined />} /> Oliver Jons
        </span>
        <span className="font-semibold">
          {" "}
          <Avatar size={64} icon={<UserOutlined />} /> Oliver Jons
        </span>
        <span className="font-semibold">
          {" "}
          <Avatar size={64} icon={<UserOutlined />} /> Oliver Jons
        </span>
        <span className="font-semibold">
          {" "}
          <Avatar size={64} icon={<UserOutlined />} /> Oliver Jons
        </span>
        <span className="font-semibold">
          {" "}
          <Avatar size={64} icon={<UserOutlined />} /> Oliver Jons
        </span>
      </div>
    </div>
  );
}
