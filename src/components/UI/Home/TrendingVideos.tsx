import React, { useState } from "react";
import { CustomPagination } from "../../../Shared/CustomPagination";
import VideoArtistCard from "../../Core/VideoArtistCard";

export default function TrendingVideos() {
  const [current, setCurrent] = useState<number>(1);

  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div className="bg-primary py-16 text-white mt-4">
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-0">
            Trending Videos
          </h1>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <CustomPagination
          current={current}
          onChange={onChange}
          total={40}
          isRedBackground={true}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-4 md:mx-8 mt-6 gap-6 lg:gap-8 justify-items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <VideoArtistCard
            key={index}
            url={"/img/artist.jpg"}
            width={180}
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
