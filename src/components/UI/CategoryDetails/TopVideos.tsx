import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Image from "next/image";
import { GrFormView } from "react-icons/gr";

export default function TopVideos({ videos }) {
  return (
    <>
      <h1 className="font-bold text-xl ml-3 mt-3">Top Videos</h1>
      <div className="grid md:grid-cols-3 justify-items-center gap-4 m-2 ">
        {videos &&
          videos.slice(0, 3).map((video, index) => {
            return (
              <div key={index}>
                <Card
                  className="relative "
                  cover={
                    <Image
                      alt="example"
                      src={video.large_img}
                      width={350}
                      height={200}
                      blurDataURL={video.large_img}
                      loading="lazy"
                    />
                  }
                >
                  <div className="flex items-center absolute top-1 bg-slate-300 rounded-md pr-4 left-1">
                    <GrFormView size={24} className="-pl-2" />
                    <span>{video.youtube_view_count} </span>
                  </div>
                  <h4 className="text-xs -ml-4 -mt-4 py-1 font-semibold">
                    {" "}
                    {video.title}
                  </h4>
                  <div className="-ml-5 -mb-4">
                    {video.youtube_tags &&
                      video.youtube_tags.map((tag, index) => (
                        <button
                          className="border-2 m-1 p-1 rounded-md text-xs "
                          key={index}
                        >
                          {" "}
                          {tag}{" "}
                        </button>
                      ))}
                  </div>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
}
