import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { useState } from "react";
import { CustomPagination } from "../../../Shared/CustomPagination";
import { useArtistsQuery } from "../../../redux/api/artistApi";

export default function MoreArtists() {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  query["pageNo"] = page;
  query["itemPerPage"] = size;
  const { data, isLoading } = useArtistsQuery({ ...query });
  const onChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="m-4 md:m-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
          More Artists
        </h1>

        <CustomPagination
          current={page}
          onChange={onChange}
          total={40}
          isRedBackground={false}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-y-8 mt-4 gap-x-2 md:gap-x-8 justify-items-center">
        {data &&
          data?.data.map((artist: any, index: number) => {
            return (
              <div key={index} className="mt-2 flex items-center">
                <Space>
                  <Avatar
                    src={artist?.small_img}
                    size={64}
                    icon={<UserOutlined />}
                  />
                  <span className="font-semibold text-base md:text-lg">
                    {artist?.artist_name}
                  </span>
                </Space>
              </div>
            );
          })}
      </div>
    </div>
  );
}
