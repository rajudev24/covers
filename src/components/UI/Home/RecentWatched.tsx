"use client";
import { useState } from "react";
import { CustomPagination } from "../../../Shared/CustomPagination";
import ArtistCard from "../../Core/ArtistCard";
import useMobileDetection from "../../../utils/phoneSizeDetect";
import { useVideosQuery } from "../../../redux/api/videoApi";
import Loading from "../../Loading/Loading";

export default function RecentWatched() {
  const isMobile = useMobileDetection();
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(4);
  query["pageSize"] = size;
  query["pageNo"] = page;
  const { data, isLoading } = useVideosQuery({ ...query });
  // console.log(data);
  const onChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="m-8 max-sm:m-2">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">
          Recent Watched
        </h1>

        {isMobile ? null : (
          <CustomPagination
            current={page}
            onChange={onChange}
            total={40}
            isRedBackground={false}
          />
        )}
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-4 gap-x-6 max-sm:gap-2">
          {data &&
            data?.data.map((video: any, index: number) => {
              let artistName = JSON.parse(video?.artist);
              // let categoryName = JSON.parse(video?.categories);
              // console.log(categoryName);
              return (
                <ArtistCard
                  key={index}
                  url={video?.small_img}
                  width={200}
                  height={200}
                  categoryTitle={"DRAMA SERIES"}
                  artistName={artistName?.artist_name}
                  altTag={"artist image"}
                />
              );
            })}
        </div>
      )}

      <div className="text-center mt-4">
        {isMobile ? (
          <CustomPagination
            current={page}
            onChange={onChange}
            total={40}
            isRedBackground={false}
          />
        ) : null}
      </div>
    </div>
  );
}
