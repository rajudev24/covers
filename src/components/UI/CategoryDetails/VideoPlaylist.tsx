import React from "react";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import Image from "next/image";

export default function VideoPlaylist({ videos }) {
  console.log(videos);
  return (
    <div className="mt-3 md:mr-2 w-2/3 max-sm:mx">
      <h1 className="font-bold text-xl ml-3 ">Video Playlist</h1>
      <div className="border mt-2 rounded-md ">
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex items-center justify-between my-1 hover:bg-slate-200 p-1 rounded-md "
          >
            <div className="">
              <Image
                src={video.large_img}
                width={100}
                height={80}
                alt="Video Playlist"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <div className="ml-2">
              <h4 className="text-xs"> {video.title} </h4>
              <h5 className="text-xs text-slate-500">
                {" "}
                {video.categories.category_name}{" "}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
