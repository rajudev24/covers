import Image from "next/image";
import { useState } from "react";
import { CustomPagination } from "../../../Shared/CustomPagination";
import ArtistCard from "../../Core/ArtistCard";
import useMobileDetection from "../../../utils/phoneSizeDetect";

export default function RecentWatched() {
  const [current, setCurrent] = useState<number>(1);
  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };
  const isMobile = useMobileDetection();
  return (
    <div className="m-8 max-sm:m-2">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">
          Recent Watched
        </h1>

        {isMobile ? null : (
          <CustomPagination
            current={current}
            onChange={onChange}
            total={40}
            isRedBackground={false}
          />
        )}
      </div>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-4 gap-x-6 max-sm:gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <ArtistCard
            key={index}
            url={"/img/artist.jpg"}
            width={120}
            height={100}
            categoryTitle={"DRAMA SERIES"}
            artistName={"Oliver Jons"}
            altTag={"artist image"}
          />
        ))}
      </div>

      <div className="text-center mt-4">
        {isMobile ? (
          <CustomPagination
            current={current}
            onChange={onChange}
            total={40}
            isRedBackground={false}
          />
        ) : null}
      </div>
    </div>
  );
}
