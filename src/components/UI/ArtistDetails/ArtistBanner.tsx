import { Button } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export default function ArtistBanner() {
  return (
    <div className="relative mb-24 ">
      <div className="w-full bg-gradient-to-tl from-violet-500 to-violet-800 rounded-md p-2  py-8 text-white pb-24 z-10">
        <h1 className="text-xl font-semibold mt-4">
          {" "}
          This is Artist Banner, Here we wil show something about the Artist!!{" "}
        </h1>
        <h1 className="">
          {" "}
          This is Artist Banner, Here we wil show something about the Artist!!{" "}
        </h1>
      </div>
      <div className="absolute top-36 left-4 w-full ">
        <div className="flex justify-between">
          <div>
            <Avatar size={128} icon={<UserOutlined />} />
          </div>
          <div className="mt-14 mx-4  w-full flex justify-between ">
            <div>
              <h1 className="text-2xl font-semibold">Sudeep Sharma</h1>
              <span> 250 Subscriber</span>
            </div>
            <div className="mt-1">
              <Button
                style={{
                  backgroundColor: "#2775f2",
                  color: "white",
                }}
                className="mr-4"
              >
                {" "}
                Follow The Artist{" "}
              </Button>
              <Button
                style={{
                  backgroundColor: "#5e05ed",
                  color: "white",
                }}
                className="mr-4"
              >
                {" "}
                Add To Favorite{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
