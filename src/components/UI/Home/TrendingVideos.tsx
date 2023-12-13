import React, { useState } from "react";
import { CustomPagination } from "../../../Shared/CustomPagination";
import VideoArtistCard from "../../Core/VideoArtistCard";
import useMobileDetection from "../../../utils/phoneSizeDetect";
import { useVideosQuery } from "../../../redux/api/videoApi";

export default function TrendingVideos() {
  const isMobile = useMobileDetection();
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  query["pageSize"] = size;
  query["pageNo"] = page;
  const { data, isLoading } = useVideosQuery({ ...query });

  const onChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="bg-primary py-16 text-white mt-4">
      <div className="flex flex-col md:flex-row justify-between  mx-4 md:mx-8">
        <div className="max-sm:text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-0">
            Trending Videos
          </h1>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        {isMobile ? null : (
          <CustomPagination
            current={page}
            onChange={onChange}
            total={40}
            isRedBackground={true}
          />
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-4 md:mx-8 mt-6 gap-6 lg:gap-6 justify-items-center max-sm:gap-2">
        {data &&
          data.data?.map((video: any, index: number) => {
            let artistName = JSON.parse(video?.artist);
            const truncatedTitle = video?.title?.slice(0, 35);
            return (
              <VideoArtistCard
                key={index}
                url={video?.standard_img}
                width={250}
                height={250}
                categoryTitle={truncatedTitle}
                artistName={artistName?.artist_name}
                altTag={"Artist image"}
              />
            );
          })}
      </div>

      <div className="text-center mt-4">
        {isMobile ? (
          <CustomPagination
            current={page}
            onChange={onChange}
            total={40}
            isRedBackground={true}
          />
        ) : null}
      </div>
    </div>
  );
}
