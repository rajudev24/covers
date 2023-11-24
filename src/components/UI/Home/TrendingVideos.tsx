import React, { useState } from "react";
import Image from "next/image";
import { CustomPagination } from "../../../Shared/CustomPagination";
import VideoArtistCard from "../../Core/VideoArtistCard";

export default function TrendingVideos() {
  const [current, setCurrent] = useState<number>(1);
  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="bg-[#AD241B] py-16 text-white mt-4">
      <div className="flex justify-between mx-8 ">
        <div>
          <h1 className="text-3xl font-semibold ">Trending Videos</h1>
          <p className="mt-2 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <CustomPagination current={current} onChange={onChange} total={40} />
      </div>
      <div className="grid grid-cols-6 max-sm:grid-cols-2 mx-8 mt-6 gap-2 ">
        {Array.from({ length: 6 }).map((_, index) => (
          <VideoArtistCard
            key={index}
            url={"/img/artist.jpg"}
            width={150}
            height={150}
            categoryTitle={"THDST-S1EP1"}
            artistName={"Oliver Jons"}
            altTag={"Artist image"}
          />
        ))}
      </div>
    </div>
  );
}
