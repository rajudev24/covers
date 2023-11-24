import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Table } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, record) => (
      <span>
        <Avatar size={30} icon={<UserOutlined />} /> {text}
      </span>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Views",
    dataIndex: "views",
  },
];

export default function VideoTable({ videos }) {
  const data = videos
    ? videos.map((item) => ({
        name: item.categories.category_name,
        title: item.title,
        views: item.youtube_view_count,
      }))
    : [];
  return (
    <div className="mx-2">
      <h1 className="font-bold text-xl mb-3">Trending Artists</h1>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
}
