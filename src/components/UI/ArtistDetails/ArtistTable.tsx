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
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

export default function ArtistTable() {
  return (
    <div className="mx-2">
      <h1 className="font-bold text-xl mb-3">Trending Artists</h1>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
}
