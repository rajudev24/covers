import React, { useState } from "react";
import Image from "next/image";
import { CustomPagination } from "../../../Shared/CustomPagination";
import useMobileDetection from "../../../utils/phoneSizeDetect";
import { useVideosQuery } from "../../../redux/api/videoApi";
import Link from "next/link";
import Loading from "../../Loading/Loading";

export default function PopularVideos() {
  const isMobile = useMobileDetection();
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(6);
  query["pageSize"] = size;
  query["pageNo"] = page;
  const { data, isLoading } = useVideosQuery({ ...query });
  // console.log(data);
  const onChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="bg-primary py-8 md:py-16 text-white mt-4">
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-8 items-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-0">
          Popular Videos
        </h1>

        <CustomPagination
          current={page}
          onChange={onChange}
          total={40}
          isRedBackground={true}
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 mx-4 md:mx-8 mt-4 gap-y-4 justify-items-center">
          {data &&
            data.data?.map((video: any, index: number) => {
              let artistName = JSON.parse(video?.artist);
              const truncatedTitle = video?.title?.slice(0, 30);
              return (
                <Link href={video?.slug} key={index} className=" ">
                  <Image
                    src={video?.standard_img}
                    alt="artist image"
                    width={250}
                    height={250}
                    loading="lazy"
                    className="rounded-xl w-full"
                  />
                  <div className="mt-2">
                    <h1 className="text-base md:text-lg lg:text-xl font-bold text-white">
                      {truncatedTitle}
                    </h1>
                    <p className="text-[#e4e2e2] text-sm ">
                      {artistName?.artist_name}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
}
