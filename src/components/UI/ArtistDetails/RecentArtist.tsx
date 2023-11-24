import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
export default function RecentArtist() {
  return (
    <div className="mt-3 md:mr-2 w-full max-sm:mx">
      <h1 className="font-bold text-xl ml-3 ">Recent Artists</h1>
      <div className="border p-2 rounded-md my-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <Avatar size={30} icon={<UserOutlined />} />
              <h4 className="ml-1"> Sudeep Sharma </h4>
            </div>
            <Button className="bg-indigo-500 text-white">+Follow</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
