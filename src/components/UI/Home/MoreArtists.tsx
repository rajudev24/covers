import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { useState } from "react";
import { CustomPagination } from "../../../Shared/CustomPagination";

export default function MoreArtists() {
  const [current, setCurrent] = useState<number>(1);
  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="m-8 ">
      <div className="flex justify-between ">
        <h1 className="text-3xl font-semibold ">More Artists</h1>

        <CustomPagination current={current} onChange={onChange} total={40} />
      </div>
      <div className="grid grid-cols-5 gap-y-8 mt-4 gap-x-8 ">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="mt-2 flex text-left items-center ">
            <span className="font-semibold text-lg">
              {" "}
              <Avatar
                src={"./img/artist.jpg"}
                size={64}
                icon={<UserOutlined />}
              />{" "}
              Oliver Jons
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
