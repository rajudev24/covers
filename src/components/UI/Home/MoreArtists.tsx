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
    <div className="m-4 md:m-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
          More Artists
        </h1>

        <CustomPagination
          current={current}
          onChange={onChange}
          total={40}
          isRedBackground={false}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-y-8 mt-4 gap-x-4 md:gap-x-8 justify-items-center">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="mt-2 flex items-center">
            <Space>
              <Avatar
                src={"./img/artist.jpg"}
                size={64}
                icon={<UserOutlined />}
              />
              <span className="font-semibold text-base md:text-lg">
                Oliver Jons
              </span>
            </Space>
          </div>
        ))}
      </div>
    </div>
  );
}
